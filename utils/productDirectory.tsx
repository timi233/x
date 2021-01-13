import dynamic from 'next/dynamic';

export const ALL_PROGRAMS = {
  helloWorld: dynamic(() => import('components/generic/HelloWorld'))
};

export const STARTUP_PROGRAMS = {
  helloWorld: ALL_PROGRAMS.helloWorld
};
