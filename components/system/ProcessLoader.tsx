import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, process]) => (
        <RenderProcess key={id} {...process} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
