'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

export function UpdateSettings({ labels, initial, onRestart }) {
  const [duration, minutes, start, restart] = labels;

  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    onRestart({ minutes: Number(values.get('minutes')), start: Number(values.get('start')) });
  }

  return (
    <form className="scene-settings update-settings" onSubmit={submit}>
      <div className="scene-setting">
        <label htmlFor="update-minutes">{duration}</label>
        <div className="scene-number">
          <input id="update-minutes" name="minutes" type="number" inputMode="numeric" min="1" max="240" defaultValue={initial.minutes} aria-describedby="update-units" required />
          <span id="update-units">{minutes}</span>
        </div>
      </div>
      <div className="scene-setting">
        <label htmlFor="update-start">{start}</label>
        <div className="scene-number">
          <input id="update-start" name="start" type="number" inputMode="numeric" min="0" max="100" defaultValue={initial.start} aria-describedby="update-percent" required />
          <span id="update-percent">%</span>
        </div>
      </div>
      <button className="download" type="submit">{restart}</button>
    </form>
  );
}

export function CallSettings({ labels, count, onCount, self, onSelf, guests, onGuest }) {
  const [selfLabel, countLabel, guestLabel, privacy] = labels;
  const maxCount = guests.length + 1;

  return (
    <div className="scene-settings call-settings">
      <div className="scene-setting">
        <label htmlFor="call-self">{selfLabel}</label>
        <input id="call-self" type="text" value={self} maxLength={40} autoComplete="off" onChange={(event) => onSelf(event.target.value)} />
      </div>
      <div className="scene-setting">
        <label htmlFor="call-count">{countLabel}</label>
        <div className="call-count">
          <button className="fullscreen-action" type="button" aria-label={`${countLabel} − 1`} disabled={count === 1} onClick={() => onCount(count - 1)}>−</button>
          <input id="call-count" type="number" inputMode="numeric" min="1" max={maxCount} value={count} onChange={(event) => {
            const value = event.target.valueAsNumber;
            if (Number.isInteger(value)) onCount(Math.max(1, Math.min(maxCount, value)));
          }} />
          <button className="fullscreen-action" type="button" aria-label={`${countLabel} + 1`} disabled={count === maxCount} onClick={() => onCount(count + 1)}>+</button>
        </div>
      </div>
      {count > 1 && <div className="scene-setting call-guests">
        <span id="call-guests-label">{guestLabel}</span>
        <div className="call-guest-list" role="group" aria-labelledby="call-guests-label">
          {guests.slice(0, count - 1).map((name, index) => (
            <input key={index} type="text" aria-label={`${guestLabel} ${index + 1}`} value={name} maxLength={40} autoComplete="off" onChange={(event) => onGuest(index, event.target.value)} />
          ))}
        </div>
      </div>}
      <p className="scene-settings-note">{privacy}</p>
    </div>
  );
}

const meterLevels = [27, 39, 49, 44, 62, 55, 43, 59, 71, 62, 52, 47, 57, 72, 59, 46, 37, 52, 65, 56, 46, 36, 47, 35];

export function NoiseSettings({ labels }) {
  const [play, pause, volumeLabel, unavailable] = labels;
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [failed, setFailed] = useState(false);
  const audio = useRef(null);

  useEffect(() => () => {
    audio.current?.context.close().catch(() => {});
    audio.current = null;
  }, []);

  async function toggle() {
    setFailed(false);
    try {
      if (playing) {
        await audio.current.context.suspend();
        setPlaying(false);
        return;
      }

      if (!audio.current) {
        const AudioContext = window.AudioContext ?? window.webkitAudioContext;
        const context = new AudioContext();
        const gain = context.createGain();
        audio.current = { context, gain };
        const source = context.createBufferSource();
        const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
        const samples = buffer.getChannelData(0);
        for (let index = 0; index < samples.length; index++) samples[index] = Math.random() * 2 - 1;
        source.buffer = buffer;
        source.loop = true;
        source.connect(gain).connect(context.destination);
        gain.gain.value = volume * .002;
        source.start();
      }
      await audio.current.context.resume();
      setPlaying(true);
    } catch {
      setFailed(true);
    }
  }

  function adjustVolume(event) {
    const nextVolume = event.target.valueAsNumber;
    setVolume(nextVolume);
    if (audio.current) audio.current.gain.gain.setTargetAtTime(nextVolume * .002, audio.current.context.currentTime, .02);
  }

  return (
    <div className="scene-settings noise-settings">
      <div className="noise-meter" aria-hidden="true" data-playing={playing && volume > 0 ? '' : undefined}>
        {meterLevels.map((level, index) => <i key={index} style={{ '--level': `${level}%`, '--delay': `${index % 7 * -.077}s` }} />)}
      </div>
      <button className="download" type="button" onClick={toggle}>
        <Icon name={playing ? 'pause' : 'play'} />{playing ? pause : play}
      </button>
      <div className="scene-setting">
        <label htmlFor="noise-volume">{volumeLabel}</label>
        <input id="noise-volume" type="range" min="0" max="100" value={volume} onChange={adjustVolume} />
      </div>
      {failed && <p className="scene-settings-note" role="status">{unavailable}</p>}
    </div>
  );
}
