const crackAngles = [-169, -149, -121, -95, -77, -52, -39, -12, 3, 22, 48, 62, 89, 111, 142, 155, 176];
const rainColumns = ['A7 :: M2 9Z', '0Y 5A :: E1', 'Q8 2X 4U ::', 'T9 :: K6 L3', '1S V0 :: H5', 'U3 Z8 M2 4W', 'P0 :: C3 2X', 'Y7 A1 9F ::', 'R6 :: N2 J5', 'H4 G1 :: S7', '2Q M9 D3 ::', 'B8 :: F5 X0'];
const callerInitials = ['R', 'M', 'A', 'S', 'J', 'D'];

function SceneArtwork({ id, copy, active, update, progress, clock, clockLabel, quote }) {
  if (update) {
    return (
      <span className="update-content">
        <span className="update-label">{copy.updating}</span>
        <span className="update-track"><i /></span>
        <span data-scene-percent="">{progress}%</span>
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
    case 'call':
      return <span className="call-grid">{callerInitials.map((initial) => <i key={initial}>{initial}</i>)}</span>;
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

export function SceneVisual({ id, copy, active = false, progress = 24, clock = ['15', '31', '38'], clockLabel, quote }) {
  const update = id.startsWith('update-');
  const hasAccessibleContent = active && (update || id === 'clock' || id === 'quotes');

  return (
    <span className={`scene-visual scene-${id}`} aria-hidden={hasAccessibleContent ? undefined : true} style={update ? { '--progress': `${progress}%` } : undefined}>
      <SceneArtwork id={id} copy={copy} active={active} update={update} progress={progress} clock={clock} clockLabel={clockLabel} quote={quote} />
    </span>
  );
}
