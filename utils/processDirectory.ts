import dynamic from 'next/dynamic';

export const Taskbar = {
  Component: dynamic(() => import('components/system/Taskbar'))
};

export const HelloWorld = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};
