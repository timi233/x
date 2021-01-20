import styled from 'styled-components';

const Wallpaper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
`;

export default Wallpaper;
