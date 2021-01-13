import type { FC } from 'react';
import { STARTUP_PROGRAMS } from 'utils/productDirectory';

const Index: FC = () => (
  <>
    {Object.entries(STARTUP_PROGRAMS).map(([id, Component]) => (
      <Component key={id} />
    ))}
  </>
);

export default Index;
