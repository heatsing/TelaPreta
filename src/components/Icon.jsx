import { Check, ChevronDown, Download, Globe, Maximize, Minimize, Moon, Pause, Play, Sun } from 'lucide-react';

const icons = {
  fullscreen: Maximize,
  exitFullscreen: Minimize,
  sun: Sun,
  moon: Moon,
  globe: Globe,
  chevron: ChevronDown,
  check: Check,
  download: Download,
  play: Play,
  pause: Pause
};

export function Icon({ name }) {
  const props = { className: 'icon', strokeWidth: 1.8, 'aria-hidden': true };

  if (name === 'brand') {
    return (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.2" />
        <path d="M8 9h8v6H8z" />
      </svg>
    );
  }

  const Glyph = icons[name];
  return Glyph ? <Glyph {...props} /> : null;
}
