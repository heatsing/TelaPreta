const shapes = {
  fullscreen: <path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" />,
  exitFullscreen: <path d="M4 9h5V4m6 0v5h5M4 15h5v5m6 0v-5h5" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /></>,
  moon: <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z" />,
  brand: <><rect x="3.5" y="4.5" width="17" height="15" rx="2.2" /><path d="M8 9h8v6H8z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  download: <path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4" />
};

export function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {shapes[name]}
    </svg>
  );
}
