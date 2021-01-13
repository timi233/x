import type { ComponentType } from 'react';

export type Programs = { [key: string]: ComponentType };

export type ProgramContextState = { running: Programs };
