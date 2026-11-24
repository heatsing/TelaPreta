'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { defaultGuests, defaultSelf } from '../scene-defaults.mjs';
import { FullscreenAction, FullscreenDialog, FullscreenPreview, useFullscreen } from './Fullscreen';
import { ScreenColors } from './ScreenColors';
import { CallSettings, NoiseSettings, UpdateSettings } from './SceneSettings';
import { SceneVisual } from './SceneVisual';

const animatedScenes = new Set(['radar', 'bounce', 'clock', 'rain', 'boot-xp']);
const defaultUpdate = { minutes: 42, start: 7 };
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

export function ScenePlayer({ lang, scene, copy, ui, colors, controls }) {
  const { id, name } = scene;
  const update = id.startsWith('update-');
  const isClock = id === 'clock';
  const canPause = update || animatedScenes.has(id);
  const canChangeQuote = id === 'quotes';
  const [motionOverride, setMotionOverride] = useState(null);
  const [progress, setProgress] = useState(defaultUpdate.start);
  const [updateRun, setUpdateRun] = useState(defaultUpdate);
  const updateClock = useRef({ run: null, elapsed: 0 });
  const [clockTime, setClockTime] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [callCount, setCallCount] = useState(6);
  const [self, setSelf] = useState(defaultSelf);
  const [guests, setGuests] = useState(defaultGuests);
  const fullscreen = useFullscreen();
  const reducedMotion = useSyncExternalStore(subscribeMotion, shouldReduceMotion, defaultMotionPreference);
  const paused = motionOverride ?? reducedMotion;
  const clockFormatter = useMemo(() => new Intl.DateTimeFormat(lang, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }), [lang]);

  useEffect(() => {
    if (!update || paused || updateRun.start === 100) return;
    if (updateClock.current.run !== updateRun) updateClock.current = { run: updateRun, elapsed: 0 };
    const clock = updateClock.current;
    const total = updateRun.minutes * 60000;
    if (clock.elapsed >= total) return;

    const startedAt = performance.now() - clock.elapsed;
    const timer = setInterval(() => {
      clock.elapsed = Math.min(total, performance.now() - startedAt);
      setProgress(Math.floor(updateRun.start + (100 - updateRun.start) * (clock.elapsed / total)));
      if (clock.elapsed === total) clearInterval(timer);
    }, 200);
    return () => clearInterval(timer);
  }, [update, paused, updateRun]);

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
  const callers = id === 'call' ? [...guests.slice(0, callCount - 1), self] : undefined;

  function restart(run) {
    setProgress(run.start);
    setUpdateRun(run);
    setMotionOverride(false);
  }

  function renameGuest(index, value) {
    setGuests((names) => names.map((name, guestIndex) => guestIndex === index ? value : name));
  }

  const visual = (
    <span className="scene-player-visual" data-paused={paused ? '' : undefined} data-motion-override={motionOverride === null ? undefined : ''}>
      <SceneVisual id={id} name={name} copy={copy} active progress={progress} clock={clock} clockLabel={clockLabel} quote={copy.quotes[quoteIndex]} callers={callers} />
    </span>
  );

  return (
    <section className="tool scene-player" id="tool" aria-labelledby="stage-title" tabIndex={-1}>
      <div className="stage" id="scene-player" tabIndex={-1}>
        <div className="stage-header"><h2 id="stage-title">{ui.preview}</h2></div>
        <div className={controls ? 'scene-layout' : undefined}>
          <FullscreenPreview className="scene-preview" label={ui.fullscreen} onOpen={fullscreen.open}>{visual}</FullscreenPreview>
          {update && <UpdateSettings labels={controls} initial={defaultUpdate} onRestart={restart} />}
          {id === 'call' && <CallSettings labels={controls} count={callCount} onCount={setCallCount} self={self} onSelf={setSelf} guests={guests} onGuest={renameGuest} />}
          {id === 'white-noise' && <NoiseSettings labels={controls} />}
        </div>
        <ScreenColors label={ui.colors} colors={colors} />
      </div>
      <div className="tool-options scene-options">
        <div className="download-actions">
          <FullscreenAction label={ui.fullscreen} onOpen={fullscreen.open} />
          {canPause && (
            <button className="fullscreen-action" type="button" data-pause="" aria-pressed={paused} onClick={() => setMotionOverride(!paused)}>
              {paused ? copy.resume : copy.pause}
            </button>
          )}
          {canChangeQuote && (
            <button className="fullscreen-action" type="button" data-next-quote="" onClick={() => setQuoteIndex((value) => (value + 1) % copy.quotes.length)}>
              {copy.next}
            </button>
          )}
        </div>
      </div>
      <FullscreenDialog fullscreen={fullscreen} label={ui.fullscreen} exitLabel={ui.exitFullscreen}>
        {fullscreen.isOpen && visual}
      </FullscreenDialog>
    </section>
  );
}
