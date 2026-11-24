'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { FullscreenAction, FullscreenDialog, FullscreenPreview, useFullscreen } from './Fullscreen';
import { ScreenColors } from './ScreenColors';
import { useScreenSettings } from './ScreenSettings';

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
  const { color, setColor, resolution, setResolution } = useScreenSettings();
  const [hexText, setHexText] = useState(initialColor);
  const [hexError, setHexError] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [downloading, setDownloading] = useState(false);
  const hexInput = useRef(null);
  const fullscreen = useFullscreen();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selected = parseHex(params.get('color') ?? '', true);
    const size = params.get('resolution');
    if (selected) {
      setColor(selected);
      setHexText(selected);
    }
    if (resolutions.some(({ width, height }) => `${width}x${height}` === size)) setResolution(size);
  }, [resolutions, setColor, setResolution]);

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

  function openFullscreen(event) {
    if (!commitHex()) {
      hexInput.current.focus();
      return;
    }
    return fullscreen.open(event);
  }

  async function downloadPng() {
    if (downloading) return;
    const nextColor = commitHex();
    if (!nextColor) {
      hexInput.current.focus();
      return;
    }

    const [width, height] = resolution.split('x').map(Number);
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
        <FullscreenPreview label={ui.fullscreen} onOpen={openFullscreen} />
        <ScreenColors label={ui.colors} colors={colors} currentColor={initialColor} selectedColor={color} onSelectCurrent={resetCurrentColor} />
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
              <select id="resolution" value={resolution} onChange={(event) => setResolution(event.currentTarget.value)}>
                {resolutions.map(({ width, height, label }) => (
                  <option key={`${width}x${height}`} value={`${width}x${height}`}>{label} · {width} × {height}</option>
                ))}
              </select>
              <Icon name="chevron" />
            </div>
            <button className="download" id="download" type="button" disabled={downloading} onClick={downloadPng}><Icon name="download" />{ui.download}</button>
            <FullscreenAction label={ui.fullscreen} onOpen={openFullscreen} />
          </div>
          <p className="feedback" id="feedback" role="status">{feedback}</p>
        </div>
      </div>
      <FullscreenDialog fullscreen={fullscreen} label={ui.fullscreen} exitLabel={ui.exitFullscreen} />
    </section>
  );
}
