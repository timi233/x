import type { FC } from 'react';
import { createContext, useContext, useState } from 'react';
import type { ProgramContextState, Programs } from 'types/programs';
import { STARTUP_PROGRAMS } from 'utils/programDirectory';

const ProgramContext = createContext<ProgramContextState>({ running: {} });

export const ProgramProvider: FC = () => {
  const [running] = useState<Programs>(STARTUP_PROGRAMS);

  return (
    <ProgramContext.Provider value={{ running }}>
      {Object.entries(running).map(([id, Component]) => (
        <Component key={id} />
      ))}
    </ProgramContext.Provider>
  );
};

export const usePrograms = (): ProgramContextState =>
  useContext(ProgramContext);
