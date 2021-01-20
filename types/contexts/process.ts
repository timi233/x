import type { ComponentType } from 'react';

export type ProcessProps = {
  id?: string;
};

export type Process = {
  Component: ComponentType<ProcessProps>;
  hasWindow: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
