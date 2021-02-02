import 'styled-components';

import type { WallpaperEffect, WallpaperSettings } from 'types/utils/Wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      window: string;
    };
    wallpaper: {
      render: WallpaperEffect;
      settings: WallpaperSettings;
    };
  }
}
