import dynamic from 'next/dynamic';

export const Desktop = {
  Component: dynamic(() => import('components/system/Desktop'))
};

export const HelloWorld = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};
