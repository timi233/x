import { useState } from 'react';
import type { ProcessContextState } from 'types/contexts/process';
import { Desktop, HelloWorld } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ Desktop, HelloWorld });

  return { processes };
};

export default useProcessContextState;
