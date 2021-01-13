import dynamic from 'next/dynamic';
import type { Programs } from 'types/contexts/programs';

export const ALL_PROGRAMS: Programs = {
  helloWorld: dynamic(() => import('components/generic/HelloWorld'))
};

export const STARTUP_PROGRAMS: Programs = {
  helloWorld: ALL_PROGRAMS.helloWorld
};
