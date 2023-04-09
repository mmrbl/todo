import styled, { css } from "styled-components";

export const StyledListItem = styled.li`
  ${({ isChecked }) =>
    isChecked &&
    css`
      text-decoration: line-through;
    `}
`;