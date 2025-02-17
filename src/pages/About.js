import React from "react";
import styled from "styled-components";
import ContactImage from "./ContactImage";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
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
  }

  p {
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
  }
`;
const AboutPageContainer = styled.div`
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 64px;
  @media (max-width: 660px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 330px) {
    padding-right: 12px;
    padding-left: 12px;
  }
`;
// Component
const AboutPage = () => {
  return (
    <>
      <ContactImage />
      <AboutPageContainer>
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
      </AboutPageContainer>
    </>
  );
};

export default AboutPage;
