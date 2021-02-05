import { createContext } from 'react';
import type { ContextFactory } from 'types/contexts/contextFactory';

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);
  const ContextProvider: React.FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ContextProvider };
};

export default contextFactory;
