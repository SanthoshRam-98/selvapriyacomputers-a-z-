import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 200px;
  background: #fff;
  border: 4px solid black;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 64px;
  gap: 36px;
  @media (max-width: 768px) {
    padding: 60px 75px;
  }
  @media (max-width: 992px) {
    padding: 75px 80px;
  }
  @media (max-width: 660px) {
    padding: 40px 50px;
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 420px) {
    padding: 25px 35px;
  }
  @media (max-width: 330px) {
    padding: 20px 25px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const Heading = styled.h3`
  font-family: "Philosopher", serif;
  font-size: 2rem; /* Base font size */
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
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 1.6rem; /* Final reduction for very small screens */
  }
  @media (max-width: 330px) {
    font-size: 1.3rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  max-width: 750px; /* Limit width for readability */
  margin: 0 auto; /* Center-align text */

  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.1rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
    line-height: 1.5; /* Adjust line height for compact text */
  }

  @media (max-width: 576px) {
    font-size: 0.95rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    font-size: 0.9rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
  }
`;

const KnowMoreButton = styled(Link)`
  background: #ffaaaa; /* Default background color */
  color: #1e1e1e; /* Default text color */
  font-size: 1rem;
  padding: 12px 24px; /* Default padding */
  border: none;
  text-decoration: none;
  display: inline-flex; /* For alignment of text and icon */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative; /* For absolute positioning of arrow */
  overflow: hidden;
  transition: width 0.3s ease, background-color 0.6s ease;

  width: auto; /* Default size */

  &:hover {
    background: black; /* Hover background color */
    color: #ffffff;
    width: auto; /* Slightly expand width */
  }

  span {
    display: inline-block;
    transition: margin-right 0.3s ease; /* Smooth arrow reveal */
  }

  &:hover span {
    margin-right: 12px; /* Move the arrow icon further */
  }

  svg {
    position: absolute;
    right: -24px; /* Start outside the button */
    opacity: 0;
    transform: translateX(-5px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover svg {
    opacity: 1; /* Reveal the arrow */
    transform: translateX(0); /* Slide it into view */
    right: 12px; /* Position it correctly on hover */
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 10px 18px;
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem !important;
    padding: 8px 16px !important;
  }

  @media (max-width: 330px) {
    && {
      font-size: 0.625rem !important;
      padding: 6px 12px !important;
    }
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
      <KnowMoreButton to="/about">
        <span>Know More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </KnowMoreButton>
    </AboutContainer>
  );
};

export default AboutSection;
