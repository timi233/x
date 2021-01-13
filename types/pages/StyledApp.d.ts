export type Theme = {
  colors?: {
    [key: string]: string;
  };
};

export type StyledAppProps = {
  theme?: Theme;
};
