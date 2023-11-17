// import { LoadingSpinner } from "components/loading";
import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  padding: 20px;
  color: white;
  width: 100%;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  kind = "primary",
  ...props
}) => {
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
