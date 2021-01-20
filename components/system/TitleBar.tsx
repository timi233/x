import type { FC } from 'react';
import Title from 'styles/generic/Title';
import type { TitleBarProps } from 'types/components/system/TitleBar';

const TitleBar: FC<TitleBarProps> = ({ id }) => (
  <header>
    <Title>{id}</Title>
  </header>
);

export default TitleBar;
