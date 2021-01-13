import StyledApp from 'components/pages/StyledApp';
import type {
  AppInitialProps,
  AppPropsType
} from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import { description, name } from 'package.json';
import type { FC } from 'react';

const App: FC<AppInitialProps & AppPropsType> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />
    </Head>
    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  </>
);

export default App;
