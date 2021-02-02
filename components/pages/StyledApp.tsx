import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';

const StyledApp: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme: { id } }) => (
        <ThemeProvider theme={themes[id] || themes.default}>
          {children}
        </ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
