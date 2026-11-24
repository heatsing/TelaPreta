'use client';

import { createContext, useContext, useState } from 'react';

const Settings = createContext(null);
export const defaultResolution = '1920x1080';

export function ScreenSettings({ initialColor, children }) {
  const [color, setColor] = useState(initialColor);
  const [resolution, setResolution] = useState(defaultResolution);
  return <Settings.Provider value={{ initialColor, color, setColor, resolution, setResolution }}>{children}</Settings.Provider>;
}

export function useScreenSettings() {
  return useContext(Settings);
}
