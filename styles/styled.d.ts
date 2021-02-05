import 'styled-components';

import type { WallpaperEffect } from 'types/utils/Wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      window: string;
    };
    wallpaper: WallpaperEffect;
  }
}
