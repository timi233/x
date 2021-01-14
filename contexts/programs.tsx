import useProgramContextState from 'hooks/useProgramContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { ProgramContextState } from 'types/contexts/programs';
import { STARTUP_PROGRAMS } from 'utils/productDirectory';

export const ProgramContext = createContext<ProgramContextState>({
  running: {}
});

export const ProgramProvider: FC = ({ children }) => (
  <ProgramContext.Provider value={useProgramContextState(STARTUP_PROGRAMS)}>
    {children}
  </ProgramContext.Provider>
);
