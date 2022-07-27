import React, { FC } from "react";
import { StyledButton } from "./JustButtonStyles";

type ButtonProps = {
  children: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
};

export const JustButton: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
