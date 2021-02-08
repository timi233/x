import { useState } from 'react';
import type { ProcessContextState } from 'types/contexts/process';
import { Desktop } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ Desktop });

  return { processes };
};

export default useProcessContextState;
