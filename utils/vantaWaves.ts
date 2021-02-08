import * as THREE from 'three';
import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/styles/wallpaper';
/* @ts-expect-error No declaration file is required */
import WAVES from 'vanta/dist/vanta.waves.min';

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const vantaWaves = (settings: VantaWavesSettings): WallpaperEffect => (
  desktopRef: HTMLElement
) => {
  const vantaEffect =
    desktopRef && isWebGLAvailable
      ? WAVES({
          el: desktopRef,
          THREE,
          ...disableControls,
          ...settings
        })
      : null;

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
