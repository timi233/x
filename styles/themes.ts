import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const themes: { [key: string]: DefaultTheme } = {
  default: {
    colors: {
      primary: '#000',
      window: '#808080'
    },
    wallpaper: {
      render: vantaWaves,
      settings: {
        color: 0x5588,
        gyroControls: false,
        mouseControls: false,
        touchControls: false
      }
    }
  }
};

export default themes;
