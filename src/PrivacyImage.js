import React from "react";
import styled from "styled-components";
import backgroundImage from "./Terms&Privacy/privacy.png";

// Styled Components
const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-right: 100px;
  padding-left: 100px;
  position: relative;
  top: -600px;
  height: 0px;
  @media (max-width: 660px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 330px) {
    padding-top: 32px;
    padding-right: 12px;
    padding-left: 12px;
  }
`;

const Heading = styled.h2`
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
  margin: 0;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  @media (max-width: 660px) {
    font-size: 1.75rem;
  }
  @media (max-width: 420px) {
    font-size: 1.5rem; /* Final reduction for very small screens */
  }
  @media (max-width: 330px) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  text-align: center;
  color: #1e1e1e;

  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.125rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
    line-height: 1.5; /* Adjust line height for compact text */
  }

  @media (max-width: 576px) {
    font-size: 0.875rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    line-height: 1.4; /* Tighten line spacing for smaller space */
  }
`;

const ImageSectionWrapper = styled.div`
  overflow: hidden;
`;

const ImageSection = styled.div`
  height: 400px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #cfe6f2;
  padding: 24px;
`;

const ImageAndContact = styled.div`
  margin-top: 200px;
`;
const PrivacyImage = () => {
  return (
    <>
      <ImageAndContact>
        <ImageSectionWrapper>
          <ImageSection loading="lazy" alt="Terms and conditions banner" />
        </ImageSectionWrapper>
        <AboutSectionContainer>
          <HeaderContainer>
            <Heading>Privacy Policy</Heading>
            <Text>
              At Selvapriya Computers, we are committed to protecting your
              privacy and ensuring your personal information is handled with
              care. This Privacy Policy outlines how we collect, use, and
              safeguard the data you provide when using our website and
              services.
            </Text>
          </HeaderContainer>
        </AboutSectionContainer>
      </ImageAndContact>
    </>
  );
};

export default PrivacyImage;
