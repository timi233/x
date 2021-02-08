import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

export default function Home(): React.ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
