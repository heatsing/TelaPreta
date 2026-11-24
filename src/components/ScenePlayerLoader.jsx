'use client';

import dynamic from 'next/dynamic';

export const ScenePlayerLoader = dynamic(() => import('./ScenePlayer').then(({ ScenePlayer }) => ScenePlayer));
