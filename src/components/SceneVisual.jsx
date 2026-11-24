import { defaultGuests, defaultSelf } from '../scene-defaults.mjs';

const crackAngles = [-169, -149, -121, -95, -77, -52, -39, -12, 3, 22, 48, 62, 89, 111, 142, 155, 176];
const rainColumns = ['A7 :: M2 9Z', '0Y 5A :: E1', 'Q8 2X 4U ::', 'T9 :: K6 L3', '1S V0 :: H5', 'U3 Z8 M2 4W', 'P0 :: C3 2X', 'Y7 A1 9F ::', 'R6 :: N2 J5', 'H4 G1 :: S7', '2Q M9 D3 ::', 'B8 :: F5 X0'];
const sampleCallers = [...defaultGuests.slice(0, 5), defaultSelf];

function initials(name) {
  return name.trim().split(/\s+/u).slice(0, 2).map((word) => Array.from(word)[0]).join('').toUpperCase() || '·';
}

function SceneArtwork({ id, name, copy, active, update, progress, clock, clockLabel, quote, callers }) {
  if (update) {
    return (
      <span className="update-content">
        <span className="update-emblem" aria-hidden="true" />
        <strong className="update-platform">{name}</strong>
        <span className="update-label">{copy.updating} <span data-scene-percent="">{progress}%</span></span>
        <span className="update-track"><i /></span>
      </span>
    );
  }

  switch (id) {
    case 'error':
      return <span className="error-details"><b>!</b><span>{copy.error}</span><i /><i /></span>;
    case 'cracked':
      return (
        <span className="crack-lines">
          {crackAngles.map((angle, index) => (
            <i key={angle} style={{ '--angle': `${angle}deg`, '--length': `${14 + index * 11 % 43}%`, '--fade': (4 + index % 5) / 10 }} />
          ))}
        </span>
      );
    case 'radar':
      return <span className="radar-dial"><i /><i /><i /></span>;
    case 'terminal':
      return (
        <span className="terminal-window">
          <span>01 · TELA DEMO<br />07 · █ █ ░ ░<br />23 · 0A9F ░<br />48 · ░ ░ ░ █</span>
          <span>◇ ░ ░ ░ ░<br />◇ █ █ ░ ░<br />◇ ░ █ █ ░</span>
        </span>
      );
    case 'call': {
      const columns = callers.length === 1 ? 1 : callers.length <= 4 ? 2 : 3;
      return (
        <span className="call-scene">
          <span className="call-grid" style={{ '--call-columns': columns }}>
            {callers.map((caller, index) => (
              <span className="call-tile" key={index}>
                <span className="call-avatar">{initials(caller)}</span>
                <span className="call-name">{caller}</span>
              </span>
            ))}
          </span>
          <span className="call-status"><i /><i /><i /></span>
        </span>
      );
    }
    case 'boot-xp':
      return (
        <span className="boot-content">
          <span className="boot-emblem" aria-hidden="true"><i /><i /><i /><i /></span>
          <strong>Windows XP</strong>
          <span className="boot-track" data-boot-loader=""><i /><i /><i /></span>
        </span>
      );
    case 'bounce':
      return <span className="bounce-x"><span className="bounce-mark">TELA</span></span>;
    case 'clock':
      return (
        <span className="flip-clock" data-scene-clock="" role={active ? 'img' : undefined} aria-label={clockLabel}>
          <i>{clock[0]}</i><i>{clock[1]}</i><i>{clock[2]}</i>
        </span>
      );
    case 'quotes':
      return <q data-scene-quote="">{quote ?? copy.quotes[0]}</q>;
    case 'bars':
      return <span className="signal-word">{copy.bars}</span>;
    case 'rain':
      return (
        <span className="rain-columns">
          {rainColumns.map((column, index) => <i key={column} style={{ '--delay': `${index * -1.37 % 5}s` }}>{column}</i>)}
        </span>
      );
    default:
      return null;
  }
}

export function SceneVisual({ id, name, copy, active = false, progress = 24, clock = ['15', '31', '38'], clockLabel, quote, callers = sampleCallers }) {
  const update = id.startsWith('update-');
  const hasAccessibleContent = active && (update || id === 'clock' || id === 'quotes');

  return (
    <span className={`scene-visual scene-${id}`} aria-hidden={hasAccessibleContent ? undefined : true} style={update ? { '--progress': `${progress}%` } : undefined}>
      <SceneArtwork id={id} name={name} copy={copy} active={active} update={update} progress={progress} clock={clock} clockLabel={clockLabel} quote={quote} callers={callers} />
    </span>
  );
}
