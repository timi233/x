import { useState } from 'react';
import type { ProgramContextState, Programs } from 'types/contexts/programs';

const useProgramContextState = (
  initialPrograms: Programs
): ProgramContextState => {
  const [running] = useState(initialPrograms);

  return { running };
};

export default useProgramContextState;
