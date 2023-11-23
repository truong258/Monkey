import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .post-image {
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
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
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
          alt=""
        />
      </div>
      <div className="post-content">
        <PostCategory className="post-category">Kiến thức</PostCategory>
        <h3 className="post-tittle">
          Hướng dẫn setup phòng cực chill cho người mới toàn tập
        </h3>
        <div className="post-info">
          <span className="post-time">Mar 23</span>
          <span className="post-dot"></span>
          <span className="post-author">Matheo</span>
        </div>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
