import * as THREE from 'three';
import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/utils/Wallpaper';
/* @ts-expect-error No declaration file required */
import WAVES from 'vanta/dist/vanta.waves.min';

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const disableMotionControls = {
  mouseControls: false,
  touchControls: false
};

const vantaWaves = (
  settings: Partial<VantaWavesSettings> = {}
): WallpaperEffect => (elementRef) => {
  const vantaEffect = isWebGLAvailable
    ? WAVES({
        el: elementRef.current,
        THREE, // UPGRADE: @ r124 until Vanta.js uses THREE.BufferGeometry
        ...disableMotionControls,
        ...settings
      })
    : null;

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
