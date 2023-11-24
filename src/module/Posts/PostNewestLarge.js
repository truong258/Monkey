import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTittle from "./PostTittle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostNewestLargeStyles = styled.div`
  .post-image {
    display: block;
    margin-bottom: 16px;
    height: 433px;
    border-radius: 8px;
  }
  .post-category {
    margin-bottom: 10px;
  }

  .post-info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 600;
    margin-left: auto;
    .post-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
  .post-tittle {
    margin-bottom: 16px;
  }
`;

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
        className="post-image"
        to="/sign-up"
      ></PostImage>

      <PostCategory className="post-category">Kiến thức</PostCategory>
      <PostTittle size="big" className="post-tittle">
        Hướng dẫn setup phòng cực chill cho người mới toàn tập
      </PostTittle>

      <PostInfo></PostInfo>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
