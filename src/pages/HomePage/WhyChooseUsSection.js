import React from "react";
import styled from "styled-components";
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
  gap: 24px;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-right: 100px;
  padding-left: 100px;
  width: 100%;
  @media (max-width: 660px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 330px) {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

const Heading = styled.h3`
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
    font-size: 0.75rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
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
