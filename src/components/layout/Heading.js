import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  color: ${(props) => props.theme.tertiary};
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  &:before {
    content: "";
    width: 180px;
    height: 4px;
    background-color: ${(props) => props.theme.accent};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }
`;

const Heading = ({ classname = "", children }) => {
  return <HeadingStyles className={classname}>{children}</HeadingStyles>;
};

export default Heading;
