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
        <Subtitle>
          40 Years of Trusted
          <br />
          Quality in Printing
          <br />& Design
        </Subtitle>
        <Description>
          Our commitment to quality and innovation has
          <br />
          made us a trusted name in the printing industry.
          <br />
          Explore our services and discover why quality
          <br />
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
  margin-bottom: 80px;

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
  height: 50vh; /* Allow flexible height on smaller screens */
  overflow: hidden;

  @media (min-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 992px) {
    height: 100%;
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
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: rgba(240, 248, 255, 0.9);

  @media (max-width: 330px) {
    padding: 10px; /* Reduce padding for very small screens */
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 992px) {
    width: 40%;
    align-items: flex-start;
    padding: 80px;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem; /* Reduce font size for tiny screens */
  text-align: center;

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

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

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

const Description = styled.p`
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 330px) {
    font-size: 0.75rem; /* Smaller font for tiny screens */
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    text-align: left;
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
  padding: 12px 20px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 120, 120, 1);
  }

  &:focus {
    outline: 2px solid rgba(255, 170, 170, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: 10px 16px;
  }
`;

export default HeroSectionCarousel;
