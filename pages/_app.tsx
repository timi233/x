import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import type {
  AppInitialProps,
  AppPropsType
} from 'next/dist/next-server/lib/utils';
import { description, name } from 'package.json';
import type { FC } from 'react';

const App: FC<AppInitialProps & AppPropsType> = ({ Component, pageProps }) => (
  <>
    <Metadata title={name} description={description} />
    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  </>
);

export default App;
