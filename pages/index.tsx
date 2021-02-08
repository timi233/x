import ProcessLoader from 'components/system/Process/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

export default function Home(): React.ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
