import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'types/contexts/process';
import { initialProccessContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProccessContextState
);

export const ProcessProvider: React.FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
