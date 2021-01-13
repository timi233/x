import dynamic from 'next/dynamic';
import type { Programs } from 'types/programs';

export const ALL_PROGRAMS: Programs = {
  helloWorld: dynamic(() => import('components/generic/HelloWorld'))
};

export const STARTUP_PROGRAMS = ALL_PROGRAMS;
