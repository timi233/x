import * as THREE from 'three';
import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/utils/wallpaper';
/* @ts-expect-error No declaration file required */
import WAVES from 'vanta/dist/vanta.waves.min';

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const vantaWaves = (
  settings: Partial<VantaWavesSettings> = {}
): WallpaperEffect => (elementRef) => {
  const vantaEffect = isWebGLAvailable
    ? WAVES({
        el: elementRef.current,
        THREE, // v0.124.0: https://github.com/tengbao/vanta/issues/101
        ...disableControls,
        ...settings
      })
    : null;

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
