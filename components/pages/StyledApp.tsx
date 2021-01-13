import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import themes from 'styles/themes.json';
import { StyledAppProps } from 'types/pages/StyledApp';

const StyledApp: FC<StyledAppProps> = ({
  children,
  theme = themes.default
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default StyledApp;
