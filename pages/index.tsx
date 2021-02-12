import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Process/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

const Home = (): JSX.Element => (
  <Desktop>
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
