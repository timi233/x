import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import type { ProcessContextState } from 'types/contexts/process';
import { initialProccessContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProccessContextState
);

export const ProcessProvider: React.FC = ({ children }) => (
  <Provider value={useProcessContextState()}>{children}</Provider>
);

export const ProcessConsumer = Consumer;
