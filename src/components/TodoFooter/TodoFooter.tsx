import React, { FC } from "react";
import { TODO } from "../../types";
import { StyledFooterWrapper } from "./TodoFooterStyles";
import { Text } from "@mantine/core";

type FooterProps = Pick<TODO, "createdDate" | "completedDate">;
export const TodoFooter: FC<FooterProps> = ({ createdDate, completedDate }) => {
  const created = new Date(createdDate).toLocaleString();
  const completed = new Date(completedDate).toLocaleString();
  return (
    <StyledFooterWrapper>
      <Text>Created: {created}</Text>
      {!!completedDate ? <Text>Completed: {completed}</Text> : null}
    </StyledFooterWrapper>
  );
};
