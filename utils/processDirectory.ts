import Taskbar from 'components/system/Taskbar';
import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Taskbar'];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: Taskbar
  }
};

const createProcesses = (processes: Processes, processId: string) => ({
  ...processes,
  [processId]: processDirectory[processId]
});

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(createProcesses, {});
