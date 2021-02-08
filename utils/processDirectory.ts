import Desktop from 'components/system/Desktop';
import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Desktop'];

export const processDirectory: Processes = {
  Desktop: {
    Component: Desktop
  },
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (processes, processId) => ({
      ...processes,
      [processId]: processDirectory[processId]
    }),
    {}
  );
