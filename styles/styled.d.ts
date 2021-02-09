import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      window: string;
    };
    fonts: {
      clock: {
        size: string;
      };
    };
    sizes: {
      taskbar: {
        height: string;
      };
      taskbarEntry: {
        border: {
          bottom: string;
        };
        padding: string;
        width: string;
      };
      startButton: {
        width: string;
      };
      clock: {
        width: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
