import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import * as THREE from 'three';
/* @ts-expect-error No declaration file required */
import WAVES from 'vanta/dist/vanta.waves.min';

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const { wallpaperSettings } = useContext(ThemeContext);

  useEffect(() => {
    const vantaEffect =
      isWebGLAvailable &&
      WAVES({
        el: desktopRef.current,
        THREE, // NOTE: @ v124 until Vanta.js uses THREE.BufferGeometry
        ...wallpaperSettings
      });

    return () => vantaEffect?.destroy?.();
  }, [desktopRef, wallpaperSettings]);
};

export default useWallpaper;
