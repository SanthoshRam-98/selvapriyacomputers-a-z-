import React from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e7f2fd;
  margin: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 64px;
  margin-bottom: 64px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 78px;
    margin-bottom: 78px;
  }
  @media (max-width: 660px) {
    margin-top: 58px;
    margin-bottom: 58px;
  }
  @media (max-width: 480px) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  @media (max-width: 360px) {
    margin-top: 38px;
    margin-bottom: 38px;
  }
`;

const Heading = styled.h3`
  font-family: "Philosopher", serif;
  font-size: 2rem;
  font-weight: 100;
  color: #333;
  margin: auto;

  @media (max-width: 992px) {
    font-size: 2rem;
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 330px) {
    font-size: 1rem;
  }
  @media (max-width: 230px) {
    font-size: 0.8rem;
  }
`;

const SubHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 1.6rem;
  }
  @media (max-width: 330px) {
    font-size: 1.3rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    width: 500px;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;
    width: 400px;
  }
  @media (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.4;
    width: 300px;
  }
  @media (max-width: 330px) {
    width: 200px;
  }
`;

const WhyChooseUsSection = () => (
  <SectionContainer>
    <HeaderContainer>
      <Heading>Why Choose Us</Heading>
      <SubHeading>Quality That Speaks for Itself</SubHeading>
      <Text>
        With decades of experience, we know that quality can never be
        compromised. Each project is handled with precision and attention to
        detail, ensuring your satisfaction every time.
      </Text>
    </HeaderContainer>
  </SectionContainer>
);

export default WhyChooseUsSection;
