import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

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
      clock: {
        width: string;
      };
      startButton: {
        icon: {
          color: string;
          size: string;
        };
        width: string;
      };
      taskbar: {
        entry: {
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
