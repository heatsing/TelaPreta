export function ScreenColors({ label, colors, selectedColor, currentColor, onSelectCurrent }) {
  return (
    <>
      <h3 id="color-label">{label}</h3>
      <div className="color-list" role="group" aria-labelledby="color-label">
        {colors.map(({ hex, name, href }) => (
          <a
            key={hex}
            className="swatch"
            data-color={hex}
            data-selected={hex === selectedColor ? '' : undefined}
            aria-current={hex === currentColor ? 'page' : undefined}
            style={{ '--swatch': hex }}
            href={href}
            onClick={hex === currentColor ? onSelectCurrent : undefined}
          >
            <span className="color-chip" aria-hidden="true" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </>
  );
}
