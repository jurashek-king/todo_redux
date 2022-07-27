import styled from "styled-components";
import { Grid, Text } from "@mantine/core";

export const StyledText = styled(Text)``;

export const TodoWrapper = styled(Grid)`
  width: 100%;
  height: 4rem;
  flex-wrap: nowrap;

  &.mantine-Grid-root .mantine-Col-root {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;

    .mantine-Text-root {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.mantine-Grid-root > div:nth-child(2) {
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    padding: 0 1rem 0 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  &.mantine-Grid-root > div:not(:nth-child(2)) {
    padding: 0;
    align-items: center;
    border-radius: 2rem;
    overflow: hidden;
    min-width: 4rem;
  }
`;
