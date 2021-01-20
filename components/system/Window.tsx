import TitleBar from 'components/system/TitleBar';
import type { FC } from 'react';
import type { WindowProps } from 'types/components/system/Window';

const Window: FC<WindowProps> = ({ children, id }) => (
  <section>
    <TitleBar id={id} />
    {children}
  </section>
);

export default Window;
