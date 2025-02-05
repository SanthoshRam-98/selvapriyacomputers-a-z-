import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 15%;
  background: #fff;
  border: 2px solid black;
  max-width: 900px;
  margin: auto;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    padding: 40px 10%;
    max-width: 85%;
  }

  @media (max-width: 768px) {
    padding: 40px 5%;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding: 30px 5%;
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 1.2rem; /* Reduce font size for tiny screens */
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 230px) {
    font-size: 0.8rem;
  }
  @media (max-width: 330px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 992px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const SubHeading = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 230px) {
    font-size: 1rem;
  }
  @media (max-width: 330px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 2.5rem;
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 0.85rem;
  color: #555;
  line-height: 1.6;
  max-width: 750px;
  margin-bottom: 1.5rem;
  @media (max-width: 230px) {
    font-size: 0.45rem;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem; /* Smaller font for tiny screens */
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
  }
`;

const KnowMoreButton = styled(Link)`
  background: pink;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 182, 193, 0.8);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 18px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 16px;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <SubHeading>Precision, Quality, and Legacy</SubHeading>
      <Text>
        Founded in 1984, SelvaPriya Computers has built a legacy of quality,
        trust, and service in the printing industry. With a commitment to
        continually evolve, we combine expertise with modern design to bring you
        the best in printing solutions. We believe in putting quality first –
        always.
      </Text>
      <KnowMoreButton to="/about">Know More</KnowMoreButton>
    </AboutContainer>
  );
};

export default AboutSection;
