import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes.json';

const StyledApp: React.FC = ({ children }) => (
  <SessionConsumer>
    {({ theme }) => (
      <ThemeProvider theme={theme || themes.default}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    )}
  </SessionConsumer>
);

export default StyledApp;
