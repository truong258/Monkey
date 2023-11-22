import React from "react";
import styled from "styled-components";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  height: 169px;
  position: relative;
  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .post-overlay {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(
      179.77deg,
      #6b6b6b 36.45%,
      rgba(163, 163, 163, 0.622265) 63.98%,
      rgba(255, 255, 255, 0) 99.8%
    );
    mix-blend-mode: multiply;
    opacity: 0.6;
  }
  .post-content {
    position: absolute;
    z-index: 10;
    inset: 0;
    padding: 20px;
    color: white;
    .post-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      .post-category {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 8px;
        color: #6b6b6b;
        font-size: 18px;
        font-weight: 600;
        white-space: nowrap;
        background-color: #f3f3f3;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100px;
      }
      .post-info {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 600;
        color: white;
        margin-left: auto;
        .post-dot {
          display: inline-block;
          width: 4px;
          height: 4p;
          border-radius: 100rem;
          background-color: currentColor;
        }
        .post-title {
          font-weight: 600;
          line-height: 1.5;
          color: white;
          display: block;
          font-size: 22px;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;

const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <img
        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt=""
        className="post-image"
      />
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <span className="post-category">Kiến thức</span>
          <div className="post-info">
            <span className="post-time"> Mar 23</span>
            <span className="post-dot"></span>
            <span className="post-author">Matheos</span>
          </div>
        </div>
        <h3 className="post-title">
          Hướng dẫn người mới setup phòng cực chill toàn tập
        </h3>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;