import 'styled-components';

import type { WallpaperEffect } from 'types/utils/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      window: string;
    };
    wallpaper?: WallpaperEffect;
  }
}
