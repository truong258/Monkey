import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostTittleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  a {
    display: block;
  }

  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
`;

const PostTittle = ({
  children,
  className = "",
  size = "normal",
  to = "/",
}) => {
  return (
    <PostTittleStyles size={size} className={className}>
      <NavLink to={to}>{children}</NavLink>
    </PostTittleStyles>
  );
};

export default PostTittle;
