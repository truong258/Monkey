import React from "react";
import styled, { css } from "styled-components";

const PostInfoStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;

  ${(props) =>
    props.color === "white" &&
    css`
      color: white;
    `};

  ${(props) =>
    props.color === "black" &&
    css`
      color: black;
    `};

  .post-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 100rem;
    background-color: currentColor;
  }
`;

const PostInfo = ({
  date = "Mar 23",
  authorName = "Matheo",
  className = "",
  color = "black",
}) => {
  return (
    <PostInfoStyles color={color} className={className}>
      <span className="post-time">{date}</span>
      <div className="post-dot"></div>
      <div className="post-author">{authorName}</div>
    </PostInfoStyles>
  );
};

export default PostInfo;
