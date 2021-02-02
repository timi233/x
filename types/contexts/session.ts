import type { Dispatch, SetStateAction } from 'react';

export type SessionContextState = {
  theme: {
    id: string;
    set: Dispatch<SetStateAction<string>>;
  };
};
