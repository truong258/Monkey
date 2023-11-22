import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  margin-bottom: 30px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .banner-content {
      max-width: 400px;
      color: white;
      .banner-heading {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .banner-desc {
        line-height: 1.75;
        margin-bottom: 40px;
      }
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              veritatis magni reprehenderit nulla praesentium, minima optio
              harum debitis qui culpa excepturi perspiciatis ex numquam nostrum.
              Accusantium repudiandae tempore tempora debitis.
            </p>
            <Button to="/sign-up" style={{ width: 200 }}>
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="./img-banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
