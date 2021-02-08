import styled from 'styled-components';

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
  position: fixed;
`;

export default StyledWindow;
