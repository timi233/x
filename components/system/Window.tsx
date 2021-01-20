import TitleBar from 'components/system/TitleBar';
import type { FC } from 'react';
import StyledWindow from 'styles/system/StyledWindow';
import type { WindowProps } from 'types/components/system/Window';

const Window: FC<WindowProps> = ({ children, id }) => (
  <StyledWindow>
    <TitleBar id={id} />
    {children}
  </StyledWindow>
);

export default Window;
