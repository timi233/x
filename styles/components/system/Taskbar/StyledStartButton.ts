import styled from 'styled-components';

const StyledStartButton = styled.button`
  background-color: red;
  color: ${({ theme }) => theme.sizes.startButton.icon.color};
  display: flex;
  font-size: ${({ theme }) => theme.sizes.startButton.icon.size};
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;
