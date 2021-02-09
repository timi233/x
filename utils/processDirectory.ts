import dynamic from 'next/dynamic';

export const Taskbar = {
  Component: dynamic(() => import('components/system/Taskbar/Taskbar'))
};

export const HelloWorld = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};
