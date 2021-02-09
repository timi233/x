import Taskbar from 'components/system/Taskbar/Taskbar';
import useWallpaper from 'hooks/useWallpaper';
import { useRef } from 'react';
import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: React.FC = ({ children }) => {
  const desktopRef = useRef<HTMLElement>(null);

  useWallpaper(desktopRef);

  return (
    <StyledDesktop ref={desktopRef}>
      <Taskbar />
    </StyledDesktop>
  );
};

export default Desktop;
