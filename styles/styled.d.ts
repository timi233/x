import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      window: string;
    };
    wallpaperSettings: {
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      scale: number;
      scaleMobile: number;
      color: number;
    };
  }
}
