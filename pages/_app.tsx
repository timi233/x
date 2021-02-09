import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps
}: AppProps): React.ReactElement {
  return (
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  );
}
