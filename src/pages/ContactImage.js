import React from "react";
import styled from "styled-components";
import backgroundImage from "../AboutImage/180bac2e2a9cde6473ddcd39d1b8fe8d05fb375df891ad106ac1792475a11db0.png"; // Adjust the path to match your project's structure

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
  font-size: 2rem; /* Base font size */
  font-weight: 100;

  margin: auto;

  @media (max-width: 992px) {
    font-size: 1.75rem;
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 330px) {
    font-size: 1.25rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;

const SubHeading = styled.h1`
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
  text-align: center;
  margin: 0;

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
  min-height: 0vh;
`;
const ContactImage = () => {
  return (
    <ImageAndContact>
      <ImageSectionWrapper>
        <ImageSection />
      </ImageSectionWrapper>
      <AboutSectionContainer>
        <HeaderContainer>
          <Heading>About Us</Heading>
          <SubHeading>Precision, Quality, and Legacy</SubHeading>
          <Text>
            Founded in 1984, SelvaPriya Computers has built a legacy of quality,
            trust, and service in the printing industry. With a commitment to
            continually evolve, we combine expertise with modern design to bring
            you the best in printing solutions. We believe in putting quality
            first – always.
          </Text>
        </HeaderContainer>
      </AboutSectionContainer>
    </ImageAndContact>
  );
};

export default ContactImage;
