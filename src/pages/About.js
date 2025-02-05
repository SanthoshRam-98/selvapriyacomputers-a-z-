import React from "react";
import styled from "styled-components";
import backgroundImage from "../AboutImage/180bac2e2a9cde6473ddcd39d1b8fe8d05fb375df891ad106ac1792475a11db0.png"; // Adjust the path to match your project's structure

// Styled Components
const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f0f8ff;
  padding: 50px 15%;
  max-width: 1200px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    padding: 40px 10%;
  }

  @media (max-width: 768px) {
    padding: 30px 5%;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubHeading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ImageSectionWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

// Component
const AboutPage = () => {
  return (
    <>
      <ImageSectionWrapper>
        <ImageSection />
      </ImageSectionWrapper>
      <AboutSectionContainer>
        <Heading>About Us</Heading>
        <SubHeading>Precision, Quality, and Legacy</SubHeading>
        <Text>
          Founded in 1984, SelvaPriya Computers has built a legacy of quality,
          trust, and service in the printing industry. With a commitment to
          continually evolve, we combine expertise with modern design to bring
          you the best in printing solutions. We believe in putting quality
          first – always.
        </Text>
        <Section>
          <h2>Our Mission</h2>
          <p>
            At SelvaPriya Computers, our mission is rooted in a steadfast
            commitment to quality and innovation. For over 40 years, we’ve
            delivered unparalleled printing solutions tailored to our customers’
            needs. Our goal is to continue shaping industry standards and
            driving progress through reliable, cutting-edge printing technology.
          </p>
        </Section>
        <Section>
          <h2>Our Purpose</h2>
          <p>
            The purpose of SelvaPriya Computers is to provide seamless design
            and printing solutions that empower our customers to communicate
            their vision effectively. We strive to enhance both individual and
            business goals by offering creative, high-quality solutions that
            inspire trust and leave a lasting impression.
          </p>
        </Section>
      </AboutSectionContainer>
    </>
  );
};

export default AboutPage;
