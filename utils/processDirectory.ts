import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Wallpaper: {
    Component: dynamic(import('styles/system/Wallpaper')),
    hasWindow: false
  }
};

export default processDirectory;
