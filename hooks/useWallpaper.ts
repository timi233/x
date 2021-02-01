import type { RefObject } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
/* @ts-expect-error No declaration file required */
import WAVES from 'vanta/dist/vanta.waves.min';

const useWallpaper = (desktopRef: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const vantaEffect = WAVES({
      el: desktopRef.current,
      THREE // NOTE: @ v124 until Vanta.js uses THREE.BufferGeometry
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [desktopRef]);
};

export default useWallpaper;
