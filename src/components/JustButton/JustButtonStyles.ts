import styled from "styled-components";
import { Button, ButtonProps } from "@mantine/core";

export const StyledButton = styled(Button)<ButtonProps<"button">>`
  padding: 0;
  background-color: #fff;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  border: 2px solid #eee;

  :hover {
    background-color: #faf9f9;
  }

  &.mantine-Button-root:disabled {
    background-color: #fff;
    border: 2px solid #eee;

    svg {
      stroke: #eee;
    }
  }

  :active {
    box-shadow: inset 0px 0px 11px 4px #c2c2c2;
  }
`;
