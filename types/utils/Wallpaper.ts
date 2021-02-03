type VantaWavesSettings = {
  color?: number;
  shininess?: number;
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
};

export type WallpaperSettings = VantaWavesSettings;

export type WallpaperEffect = (
  elementRef: React.RefObject<HTMLElement>,
  settings?: WallpaperSettings
) => () => void;
