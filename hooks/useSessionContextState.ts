import { useState } from 'react';
import type { SessionContextState } from 'types/contexts/session';

const useSessionContextState = (): SessionContextState => {
  const [theme, setTheme] = useState('');

  return {
    theme: {
      id: theme,
      set: setTheme
    }
  };
};

export default useSessionContextState;
