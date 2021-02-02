import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const {
    wallpaper: { render, settings }
  } = useContext(ThemeContext);

  useEffect(() => render(desktopRef, settings), [desktopRef, render, settings]);
};

export default useWallpaper;
