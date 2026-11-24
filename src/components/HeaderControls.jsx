'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { Icon } from './Icon';

const storageKey = 'telapreta-theme';
const themeEvent = 'telapreta-theme-change';

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.themePreference = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = theme === 'dark' ? '#171817' : '#f7f7f5';
  window.dispatchEvent(new Event(themeEvent));
}

function syncSavedTheme() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'dark' || saved === 'light') applyTheme(saved);
  } catch {}
}

function subscribeTheme(callback) {
  function handleStorage(event) {
    if (event.key === storageKey) syncSavedTheme();
  }
  window.addEventListener(themeEvent, callback);
  window.addEventListener('storage', handleStorage);
  window.addEventListener('pageshow', syncSavedTheme);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener('pageshow', syncSavedTheme);
  };
}

function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function defaultTheme() {
  return 'light';
}

export function ThemeMenu({ labels: [group, light, dark] }) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, defaultTheme);
  const options = [['light', 'sun', light], ['dark', 'moon', dark]];

  function chooseTheme(event) {
    const value = event.currentTarget.value;
    applyTheme(value);
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {}
  }

  return (
    <div className="theme-menu" role="radiogroup" aria-label={group}>
      {options.map(([value, icon, label]) => (
        <label key={value} title={label}>
          <input type="radio" name="theme" value={value} aria-label={label} checked={theme === value} onChange={chooseTheme} />
          <span><Icon name={icon} /></span>
        </label>
      ))}
    </div>
  );
}

export function LanguageMenu({ children }) {
  const details = useRef(null);

  function closeOnFocusLeave(event) {
    const next = event.relatedTarget;
    if (next && !event.currentTarget.contains(next)) event.currentTarget.open = false;
  }

  useEffect(() => {
    const menu = details.current;
    function closeOnEscape(event) {
      if (event.key !== 'Escape' || !menu.open) return;
      menu.open = false;
      menu.querySelector('summary').focus();
    }
    function closeOnOutsideClick(event) {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    }
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('click', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('click', closeOnOutsideClick);
    };
  }, []);

  return <details className="language" ref={details} onBlur={closeOnFocusLeave}>{children}</details>;
}
