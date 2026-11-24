'use client';

import { useEffect, useState } from 'react';

export function NotFoundContent({ basePath, recoveryPages }) {
  const [copy, setCopy] = useState(recoveryPages['']);

  useEffect(() => {
    const firstSegment = window.location.pathname.slice(basePath.length).split('/')[1]?.toLowerCase();
    if (!Object.hasOwn(recoveryPages, firstSegment)) return;

    const localized = recoveryPages[firstSegment];
    setCopy(localized);
    document.documentElement.lang = localized.lang;
    document.title = `${localized.title} | Telapreta.cc`;
  }, [basePath, recoveryPages]);

  return (
    <main className="shell page-intro" lang={copy.lang}>
      <h1>{copy.title}</h1>
      <p><a href={copy.href}>{copy.linkLabel}</a></p>
    </main>
  );
}
