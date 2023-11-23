import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTittle from "./PostTittle";
import PostInfo from "./PostInfo";

const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  .post-image {
    display: block;
    width: 180px;
    height: 130px;
    flex-shrink: 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .post-category {
    margin-bottom: 8px;
  }
  .post-info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    .post-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
  .post-tittle {
    margin-bottom: 8px;
  }
`;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
        />
      </div>
      <div className="post-content">
        <PostCategory type="secondary" className="post-category">
          Kiến thức
        </PostCategory>
        <PostTittle className="post-tittle">
          Hướng dẫn set up phòng cực chill cho người mới toàn tập
        </PostTittle>
        <PostInfo></PostInfo>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
