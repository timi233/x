import * as THREE from 'three';
import type { WallpaperEffect } from 'types/utils/Wallpaper';
/* @ts-expect-error No declaration file required */
import WAVES from 'vanta/dist/vanta.waves.min';

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves: WallpaperEffect = (elementRef, settings = {}) => {
  const vantaEffect =
    isWebGLAvailable &&
    WAVES({
      el: elementRef.current,
      THREE, // UPGRADE: @ r124 until Vanta.js uses THREE.BufferGeometry
      ...settings
    });

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
