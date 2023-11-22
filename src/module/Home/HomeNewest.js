import React from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostNewestLarge from "../Posts/PostNewestLarge";
import PostNewestItem from "../Posts/PostNewestItem";
import PostItem from "../Posts/PostItem";

const HomeNewestStyles = styled.div``;

const HomeNewest = () => {
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>Post Mới nhất</Heading>
        <div className="layout">
          <PostNewestLarge></PostNewestLarge>
          <div className="side-bar">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
          <div className="grid-layout grid-layout--primary">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
          </div>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
