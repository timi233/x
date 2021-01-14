import { ProgramContext, ProgramProvider } from 'contexts/programs';
import type { FC } from 'react';

const Index: FC = () => (
  <ProgramProvider>
    <ProgramContext.Consumer>
      {({ running }) =>
        Object.entries(running).map(([id, Component]) => <Component key={id} />)
      }
    </ProgramContext.Consumer>
  </ProgramProvider>
);

export default Index;
