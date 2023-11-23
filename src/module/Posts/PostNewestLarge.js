import React from "react";
import styled from "styled-components";

const PostNewestLargeStyles = styled.div`
  .post-image {
    display: block;
    margin-bottom: 16px;
    height: 433px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .post-category {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 8px;
    color: #6b6b6b;
    font-size: 14px;
    background-color: #f3deff;
    margin-bottom: 16px;
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
  .post-titlle {
    display: block;
    font-weight: bold;
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
        />
      </div>
      <div className="post-category">Kiến thức</div>
      <h3 className="post-titlle">
        Hướng dẫn setup phòng cực chill cho người mới toàn tập
      </h3>
      <div className="post-info">
        <span className="post-time">Mar 23</span>
        <span className="post-dot"></span>
        <span className="post-author">Matheo</span>
      </div>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
