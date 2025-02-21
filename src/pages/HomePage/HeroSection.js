import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const images = [
  `${process.env.PUBLIC_URL}/CorousalImages/hero1.webp`,
  `${process.env.PUBLIC_URL}/CorousalImages/hero2.webp`,
  `${process.env.PUBLIC_URL}/CorousalImages/hero3.webp`,
  `${process.env.PUBLIC_URL}/CorousalImages/hero4.webp`,
];

export function HeroSectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Selvapriya Computers - Quality Printing & Design</title>
        <meta
          name="description"
          content="40 Years of Trusted Quality in Printing & Design. Discover why quality matters to us and our clients."
        />
        <meta
          name="keywords"
          content="Selvapriya Computers, Printing Services, Design Solutions, Quality Printing, Trusted Printing"
        />
        <meta
          property="og:title"
          content="Selvapriya Computers - Quality Printing & Design"
        />
        <meta
          property="og:description"
          content="40 Years of Trusted Quality in Printing & Design."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/CorousalImages/hero1.webp`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroContainer>
        <CarouselContainer>
          <Carousel>
            {images.map((image, index) => (
              <Slide
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                isVisible={index === currentIndex}
              />
            ))}
          </Carousel>
        </CarouselContainer>

        <ContentWrapper>
          <Title>Welcome to Selvapriya Computers</Title>
          <Subtitle>40 Years of Trusted Quality in Printing & Design</Subtitle>
          <Description>
            Our commitment to quality and innovation has made us a trusted name
            in the printing industry. Explore our services and discover why
            quality matters to us and our clients.
          </Description>
          <ButtonWrapper>
            <StyledButton role="button" tabIndex={0}>
              Get a Quote
            </StyledButton>
          </ButtonWrapper>
        </ContentWrapper>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  font-family: "Philosopher", regular;
  color: rgba(30, 30, 30, 1);
  margin-bottom: 64px;

  @media (min-width: 992px) {
    flex-direction: row;
    height: 100vh;
  }
`;

const CarouselContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  min-height: 250px;
  height: 100vh; /* Ensure it fills the viewport */
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 400px; /* Allow flexibility for smaller screens */
  }
`;

const Carousel = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Slide = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  @media (max-width: 992px) {
    width: 100%; /* Increase height for smaller screens */
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: rgba(240, 248, 255, 0.9);
  gap: 24px;
  width: 50%;
  align-items: flex-start;
  padding-right: 100px;
  padding-left: 100px;
  @media (max-width: 992px) {
    align-items: center;
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 660px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 480px) {
    gap: 16px;
  }
  @media (max-width: 330px) {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

const Title = styled.h1`
  font-family: "Philosopher", serif;
  font-size: 1.625rem;
  font-weight: 100;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
  @media (max-width: 660px) {
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 0.875rem;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
  margin: 0;
  width: 400px;
  @media (max-width: 992px) {
    font-size: 2.5rem;
    text-align: center;
    width: 400px;
  }
  @media (max-width: 768px) {
    font-size: 2.25rem;
    width: 400px;
  }
  @media (max-width: 660px) {
    font-size: 1.75rem;
    width: 300px;
  }
  @media (max-width: 420px) {
    font-size: 1.5rem; /* Final reduction for very small screens */
    width: 200px;
  }
  @media (max-width: 330px) {
    font-size: 1.2rem;
    width: 200px;
  }
`;

const Description = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  text-align: left;
  color: #1e1e1e;

  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.125rem; /* Further reduction for smaller screens */
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
    line-height: 1.5; /* Adjust line height for compact text */
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 0.875rem; /* Slightly smaller for smaller phones */
    text-align: center;
  }

  @media (max-width: 420px) {
    font-size: 0.75rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const StyledButton = styled.div`
  background-color: rgba(255, 170, 170, 1);
  color: rgba(255, 255, 255, 1);
  padding: 12px 24px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: black;
  }

  &:focus {
    outline: 2px solid rgba(255, 170, 170, 0.5);
    outline-offset: 2px;
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

export default HeroSectionCarousel;
