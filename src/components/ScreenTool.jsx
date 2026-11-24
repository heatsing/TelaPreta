'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

function parseHex(text, allowShort = false) {
  const digits = text.trim().replace(/^#/, '').toUpperCase();
  if (/^[0-9A-F]{6}$/.test(digits)) return `#${digits}`;
  if (allowShort && /^[0-9A-F]{3}$/.test(digits)) {
    return '#' + Array.from(digits, (digit) => digit.repeat(2)).join('');
  }
  return null;
}

function savePng(png, filename) {
  const url = URL.createObjectURL(png);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

export function ScreenTool({ ui, initialColor, colors, resolutions }) {
  const [color, setColor] = useState(initialColor);
  const [hexText, setHexText] = useState(initialColor);
  const [hexError, setHexError] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [downloading, setDownloading] = useState(false);
  const hexInput = useRef(null);
  const resolution = useRef(null);
  const fullscreenDialog = useRef(null);
  const fullscreenField = useRef(null);
  const fullscreenOpener = useRef(null);

  useEffect(() => {
    const dialog = fullscreenDialog.current;
    const field = fullscreenField.current;
    function closeAfterNativeFullscreen() {
      if (document.fullscreenElement !== field && dialog.open) dialog.close();
    }
    field.addEventListener('fullscreenchange', closeAfterNativeFullscreen);
    return () => field.removeEventListener('fullscreenchange', closeAfterNativeFullscreen);
  }, []);

  function updatePreview(nextColor, nextText = nextColor) {
    setColor(nextColor);
    setHexText(nextText);
    setHexError(false);
    setFeedback('');
  }

  function commitHex() {
    const nextColor = parseHex(hexInput.current.value, true);
    if (nextColor) {
      if (nextColor !== color || nextColor !== hexInput.current.value) updatePreview(nextColor);
      else setHexError(false);
    } else {
      setHexError(true);
    }
    return nextColor;
  }

  function editHex(event) {
    const text = event.currentTarget.value;
    const nextColor = parseHex(text);
    if (nextColor) updatePreview(nextColor, text);
    else {
      setHexText(text);
      setHexError(false);
      setFeedback('');
    }
  }

  function onHexKey(event) {
    if (event.key === 'Enter') commitHex();
    if (event.key === 'Escape') updatePreview(color);
  }

  function resetCurrentColor(event) {
    if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    updatePreview(initialColor);
  }

  async function openFullscreen(event) {
    if (!commitHex()) {
      hexInput.current.focus();
      return;
    }
    const dialog = fullscreenDialog.current;
    const field = fullscreenField.current;
    if (dialog.open) return;

    fullscreenOpener.current = event.currentTarget;
    dialog.showModal();
    if (!document.fullscreenEnabled) return;

    try {
      await field.requestFullscreen({ navigationUI: 'hide' });
      if (!dialog.open && document.fullscreenElement === field) await document.exitFullscreen();
    } catch {
      // The dialog covers the viewport if native fullscreen is unavailable.
    }
  }

  async function restoreAfterFullscreen() {
    if (document.fullscreenElement === fullscreenField.current) {
      await document.exitFullscreen().catch(() => {});
    }
    if (!fullscreenDialog.current?.open) fullscreenOpener.current?.focus({ preventScroll: true });
  }

  async function downloadPng() {
    if (downloading) return;
    const nextColor = commitHex();
    if (!nextColor) {
      hexInput.current.focus();
      return;
    }

    const [width, height] = resolution.current.value.split('x').map(Number);
    const name = `telapreta-${nextColor.slice(1).toLowerCase()}-${width}x${height}.png`;
    const canvas = document.createElement('canvas');
    setDownloading(true);
    setFeedback('');

    try {
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) throw new Error('Canvas unavailable');
      context.fillStyle = nextColor;
      context.fillRect(0, 0, width, height);
      const png = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!png) throw new Error('PNG unavailable');
      savePng(png, name);
      setFeedback(ui.ready);
    } catch {
      setFeedback(ui.failed);
    } finally {
      canvas.width = 0;
      canvas.height = 0;
      setDownloading(false);
    }
  }

  return (
    <section className="tool" id="tool" data-initial-color={initialColor} style={{ '--screen': color }} aria-labelledby="stage-title" tabIndex={-1}>
      <div className="stage">
        <div className="stage-header">
          <h2 id="stage-title">{ui.preview}</h2>
          <span className="hex" id="hex" aria-live="polite">{color}</span>
        </div>
        <button className="preview" type="button" data-fullscreen="" aria-haspopup="dialog" aria-label={ui.fullscreen} title={ui.fullscreen} onClick={openFullscreen}>
          <span className="preview-fullscreen" aria-hidden="true">
            <Icon name="fullscreen" />
          </span>
        </button>
        <h3 id="color-label">{ui.colors}</h3>
        <div className="color-list" role="group" aria-labelledby="color-label">
          {colors.map(({ hex, name, href }) => (
            <a
              key={hex}
              className="swatch"
              data-color={hex}
              data-selected={hex === color ? '' : undefined}
              aria-current={hex === initialColor ? 'page' : undefined}
              style={{ '--swatch': hex }}
              href={href}
              onClick={hex === initialColor ? resetCurrentColor : undefined}
            >
              <span className="color-chip" aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="tool-options">
        <div className="custom-options">
          <label htmlFor="custom-color">{ui.customColor}</label>
          <div className="custom-color">
            <input id="custom-color" type="color" value={color.toLowerCase()} onChange={(event) => updatePreview(event.currentTarget.value.toUpperCase())} />
            <div className="hex-input-wrap">
              <label htmlFor="color-hex">HEX</label>
              <input
                id="color-hex"
                type="text"
                ref={hexInput}
                value={hexText}
                spellCheck={false}
                autoComplete="off"
                aria-invalid={hexError || undefined}
                aria-errormessage="color-hex-error"
                onChange={editHex}
                onBlur={commitHex}
                onKeyDown={onHexKey}
              />
            </div>
            <p className="color-hex-error" id="color-hex-error" role="status" hidden={!hexError}>{ui.invalidHex}</p>
          </div>
        </div>
        <div className="download-options">
          <label htmlFor="resolution">{ui.resolution}</label>
          <div className="download-actions">
            <div className="select-wrap">
              <select id="resolution" ref={resolution} defaultValue="1920x1080">
                {resolutions.map(({ width, height, label }) => (
                  <option key={`${width}x${height}`} value={`${width}x${height}`}>{label} · {width} × {height}</option>
                ))}
              </select>
              <Icon name="chevron" />
            </div>
            <button className="download" id="download" type="button" disabled={downloading} onClick={downloadPng}><Icon name="download" />{ui.download}</button>
            <button className="fullscreen-action" type="button" data-fullscreen="" aria-haspopup="dialog" onClick={openFullscreen}><Icon name="fullscreen" />{ui.fullscreen}</button>
          </div>
          <p className="feedback" id="feedback" role="status">{feedback}</p>
        </div>
      </div>
      <dialog id="fullscreen-dialog" ref={fullscreenDialog} aria-label={ui.fullscreen} onClose={restoreAfterFullscreen}>
        <div className="fullscreen-field" ref={fullscreenField} onClick={() => fullscreenDialog.current.close()}>
          <button className="fullscreen-exit" type="button" aria-label={ui.exitFullscreen} autoFocus><Icon name="exitFullscreen" /></button>
        </div>
      </dialog>
    </section>
  );
}
