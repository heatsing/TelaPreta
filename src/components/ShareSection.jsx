'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getNativeShareSupport = () => typeof navigator.share === 'function';
const getServerShareSupport = () => false;

export function ShareSection({ copy, url, title }) {
  const [status, setStatus] = useState('');
  const [manual, setManual] = useState(false);
  const field = useRef(null);
  const canShare = useSyncExternalStore(subscribe, getNativeShareSupport, getServerShareSupport);
  const encodedUrl = encodeURIComponent(url);
  const destinations = [
    ['WhatsApp', `https://wa.me/?text=${encodedUrl}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`],
    ['X', `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`]
  ];

  function selectUrl() {
    field.current?.focus();
    field.current?.select();
  }

  useEffect(() => {
    if (manual) selectUrl();
  }, [manual]);

  function showManualShare() {
    setStatus(copy.manual);
    setManual(true);
    if (manual) selectUrl();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setManual(false);
      setStatus(copy.copied);
    } catch {
      showManualShare();
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
    } catch (error) {
      if (error.name !== 'AbortError') showManualShare();
    }
  }

  return (
    <section className="inline-share" id="share" aria-labelledby="share-title">
      <div className="share-links">
        <h2 id="share-title">{copy.title}</h2>
        <button type="button" id="copy-share-link" onClick={copyLink}>{copy.copy}</button>
        <button type="button" id="native-share" hidden={!canShare} onClick={nativeShare}>{copy.native}</button>
        {destinations.map(([name, href]) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer nofollow">{name}</a>
        ))}
      </div>
      <p className="share-status" role="status">{status}</p>
      <input id="share-url" type="url" ref={field} value={url} aria-label={copy.copy} readOnly hidden={!manual} />
    </section>
  );
}
