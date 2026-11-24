'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

export function useFullscreen() {
  const dialog = useRef(null);
  const field = useRef(null);
  const opener = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const target = field.current;
    function closeAfterNativeFullscreen() {
      if (document.fullscreenElement !== target && dialog.current?.open) dialog.current.close();
    }
    target.addEventListener('fullscreenchange', closeAfterNativeFullscreen);
    return () => target.removeEventListener('fullscreenchange', closeAfterNativeFullscreen);
  }, []);

  async function open(event) {
    const modal = dialog.current;
    const target = field.current;
    if (modal.open) return;
    opener.current = event.currentTarget;
    modal.showModal();
    setIsOpen(true);
    if (!document.fullscreenEnabled) return;

    try {
      await target.requestFullscreen({ navigationUI: 'hide' });
      if (!modal.open && document.fullscreenElement === target) await document.exitFullscreen();
    } catch {
      // The dialog covers the viewport if native fullscreen is unavailable.
    }
  }

  async function restoreFocus() {
    if (field.current && document.fullscreenElement === field.current) await document.exitFullscreen().catch(() => {});
    if (!dialog.current?.open) {
      setIsOpen(false);
      opener.current?.focus({ preventScroll: true });
    }
  }

  return { dialog, field, isOpen, open, restoreFocus };
}

export function FullscreenPreview({ label, onOpen, className = '', children }) {
  return (
    <button className={`preview ${className}`.trimEnd()} type="button" data-fullscreen="" aria-haspopup="dialog" aria-label={label} title={label} onClick={onOpen}>
      {children}
      <span className="preview-fullscreen" aria-hidden="true"><Icon name="fullscreen" /></span>
    </button>
  );
}

export function FullscreenAction({ label, onOpen }) {
  return <button className="fullscreen-action" type="button" data-fullscreen="" aria-haspopup="dialog" onClick={onOpen}><Icon name="fullscreen" />{label}</button>;
}

export function FullscreenDialog({ fullscreen, label, exitLabel, children }) {
  return (
    <dialog id="fullscreen-dialog" ref={fullscreen.dialog} aria-label={label} onClose={fullscreen.restoreFocus}>
      <div className="fullscreen-field" ref={fullscreen.field} onClick={() => fullscreen.dialog.current.close()}>
        {children}
        <button className="fullscreen-exit" type="button" aria-label={exitLabel} autoFocus><Icon name="exitFullscreen" /></button>
      </div>
    </dialog>
  );
}
