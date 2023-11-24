import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTittle from "./PostTittle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .post-image {
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  .post-category {
    margin-bottom: 16px;
  }
  .post-info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-top: auto;
    .post-dot {
      display: inline-block;
      height: 4px;
      width: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
  .post-tittle {
    margin-bottom: 8px;
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
        alt=""
        className="post-image"
        to="/sign-up"
      ></PostImage>

      <div className="post-content">
        <PostCategory className="post-category">Kiến thức</PostCategory>
        <PostTittle className="post-tittle">
          Hướng dẫn setup phòng cực chill cho người mới toàn tập
        </PostTittle>

        <PostInfo></PostInfo>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
