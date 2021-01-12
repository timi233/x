import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import themes from 'styles/themes.json';

type Theme = {
  colors?: {
    [key: string]: string;
  };
};

type StyledAppProps = {
  theme?: Theme;
};

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
