import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

const StyledApp: React.FC<StyledAppProps> = ({ children, currentTheme }) => (
  <SessionConsumer>
    {({ theme = currentTheme }) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    )}
  </SessionConsumer>
);

export default StyledApp;
