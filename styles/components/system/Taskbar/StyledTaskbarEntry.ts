import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  background-color: pink;
  border-bottom: ${({ theme }) => theme.sizes.taskbarEntry.border.bottom};
  display: flex;
  height: 100%;
  padding: ${({ theme }) => theme.sizes.taskbarEntry.padding};
  place-items: center;
  width: ${({ theme }) => theme.sizes.taskbarEntry.width};
`;

export default StyledTaskbarEntry;
