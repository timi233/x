import Taskbar from 'components/system/Taskbar';
import { ThemeConsumer } from 'styled-components';
import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: React.FC = () => (
  <ThemeConsumer>
    {({ wallpaper }) => (
      <StyledDesktop ref={(desktopRef) => wallpaper?.(desktopRef)}>
        <Taskbar />
      </StyledDesktop>
    )}
  </ThemeConsumer>
);

export default Desktop;
