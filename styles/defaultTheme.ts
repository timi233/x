import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#000',
  primary: '#000',
  window: '#808080'
};

const fonts = {
  clock: {
    size: '12px'
  }
};

const sizes = {
  taskbar: {
    height: '30px'
  },
  taskbarEntry: {
    border: {
      bottom: `2px ${colors.primary} solid`
    },
    padding: '7px 8px 5px 8px',
    width: '160px'
  },
  startButton: {
    width: '36px'
  },
  clock: {
    width: '76px'
  }
};

const defaultTheme = {
  colors,
  fonts,
  sizes,
  wallpaper: vantaWaves({
    color: 0x5588,
    shininess: 35,
    waveHeight: 15,
    waveSpeed: 0.3,
    zoom: 0.9
  })
};

export default defaultTheme;
