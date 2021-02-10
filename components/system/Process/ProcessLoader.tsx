import RenderProcess from 'components/system/Process/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import type { Process } from 'types/contexts/process';

const RenderProcesses = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ processes }) => Object.entries(processes).map(RenderProcesses)}
  </ProcessConsumer>
);

export default ProcessLoader;
