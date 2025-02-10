import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hero1 from "../../CorousalImages/hero1.png";
import hero2 from "../../CorousalImages/hero2.png";
import hero3 from "../../CorousalImages/hero3.png";
import hero4 from "../../CorousalImages/hero4.png";

const images = [hero1, hero2, hero3, hero4];

export function HeroSectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
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
          Our commitment to quality and innovation has made us a trusted name in
          the printing industry. Explore our services and discover why quality
          matters to us and our clients.
        </Description>
        <ButtonWrapper>
          <StyledButton role="button" tabIndex={0}>
            Get a Quote
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HeroContainer>
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
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  background-color: rgba(240, 248, 255, 0.9);
  gap: 24px;
  width: 50%;
  align-items: flex-start;
  padding-bottom: 24px;
  @media (max-width: 992px) {
    align-items: center;
    padding-right: 80px;
    padding-left: 80px;
    padding-top: 80px;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 40px;
  }
  @media (max-width: 420px) {
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 30px;
  }
  @media (max-width: 330px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px; /* Reduce padding for very small screens */
  }
`;

const Title = styled.h1`
  font-family: "Philosopher", serif;
  font-size: 1.625rem;
  font-weight: 100;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.375rem;
  }

  @media (max-width: 330px) {
    font-size: 0.875rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
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

const Description = styled.p`
  margin: 0;
  text-align: left;
  font-size: 1.25rem; /* Base font size for paragraph */

  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }
  @media (max-width: 992px) {
    font-size: 1.1rem; /* Further reduction for smaller screens */
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5; /* Adjust line height for compact text */
  }

  @media (max-width: 576px) {
    font-size: 0.95rem; /* Slightly smaller for smaller phones */
  }
  @media (max-width: 420px) {
    font-size: 0.9rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
  }
  @media (max-width: 330px) {
  }
  @media (max-width: 230px) {
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
