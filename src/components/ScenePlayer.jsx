'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { SceneVisual } from './SceneVisual';

const animatedScenes = new Set(['radar', 'bounce', 'clock', 'rain']);
const motionPreference = '(prefers-reduced-motion: reduce)';

function subscribeMotion(callback) {
  const motion = window.matchMedia(motionPreference);
  motion.addEventListener('change', callback);
  return () => motion.removeEventListener('change', callback);
}

function shouldReduceMotion() {
  return window.matchMedia(motionPreference).matches;
}

function defaultMotionPreference() {
  return false;
}

export function ScenePlayer({ lang, scene, copy }) {
  const { id, name } = scene;
  const update = id.startsWith('update-');
  const isClock = id === 'clock';
  const canPause = update || animatedScenes.has(id);
  const canChangeQuote = id === 'quotes';
  const [motionOverride, setMotionOverride] = useState(null);
  const [progress, setProgress] = useState(0);
  const [clockTime, setClockTime] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeMotion, shouldReduceMotion, defaultMotionPreference);
  const paused = motionOverride ?? reducedMotion;
  const clockFormatter = useMemo(() => new Intl.DateTimeFormat(lang, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }), [lang]);

  useEffect(() => {
    if (!update || paused || progress === 100) return;
    const timer = setTimeout(() => setProgress((value) => Math.min(100, value + 2)), 420);
    return () => clearTimeout(timer);
  }, [update, paused, progress]);

  useEffect(() => {
    if (!isClock) return;
    setClockTime((value) => value ?? new Date());
    if (paused) return;
    const timer = setInterval(() => setClockTime(new Date()), 250);
    return () => clearInterval(timer);
  }, [isClock, paused]);

  const timeParts = clockTime ? clockFormatter.formatToParts(clockTime) : null;
  const clock = timeParts?.filter(({ type }) => type === 'hour' || type === 'minute' || type === 'second').map(({ value }) => value);
  const clockLabel = timeParts?.map(({ value }) => value).join('');

  return (
    <section className="scene-player" id="scene-player" aria-label={name} tabIndex={-1}>
      <div className="scene-player-visual" data-paused={paused ? '' : undefined} data-motion-override={motionOverride === null ? undefined : ''}>
        <SceneVisual id={id} copy={copy} active progress={progress} clock={clock} clockLabel={clockLabel} quote={copy.quotes[quoteIndex]} />
      </div>
      {(canPause || canChangeQuote) && (
        <div className="scene-player-actions">
          {canPause && (
            <button type="button" data-pause="" aria-pressed={paused} onClick={() => setMotionOverride(!paused)}>
              {paused ? copy.resume : copy.pause}
            </button>
          )}
          {canChangeQuote && (
            <button type="button" data-next-quote="" onClick={() => setQuoteIndex((value) => (value + 1) % copy.quotes.length)}>
              {copy.next}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
