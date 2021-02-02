import type { DefaultTheme } from 'styled-components';

const themes: { [key: string]: DefaultTheme } = {
  default: {
    colors: {
      primary: '#000',
      window: '#808080'
    },
    wallpaperSettings: {
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      scale: 0.5,
      scaleMobile: 0.5,
      color: 0x5588
    }
  }
};

export default themes;
