export type VantaSettings = {
  color?: number;
  gyroControls?: boolean;
  mouseControls?: boolean;
  touchControls?: boolean;
};

export type WallpaperCleanup = () => void;

export type WallpaperSettings = VantaSettings;

export type WallpaperEffect = (
  elementRef: React.RefObject<HTMLElement>,
  settings: WallpaperSettings
) => WallpaperCleanup;
