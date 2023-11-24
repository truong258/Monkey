import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTittle from "./PostTittle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  height: 169px;
  position: relative;
  .post-image {
    border-radius: 16px;
    height: 100%;
    width: 100%;
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
      }
      .post-info {
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
      <PostImage
        url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt=""
        className="post-image"
      ></PostImage>

      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCategory>Kiến thức</PostCategory>
          <PostInfo color="white"></PostInfo>
        </div>
        <PostTittle size="big">
          Hướng dẫn người mới setup phòng cực chill toàn tập
        </PostTittle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
