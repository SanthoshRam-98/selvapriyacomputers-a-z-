import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill, BsHeart } from "react-icons/bs"; // Smaller icons for mobile
import { IoArrowBack, IoArrowBackOutline } from "react-icons/io5"; // Import icons
import { useNavigate } from "react-router-dom";
import WeddingCard1 from "../../WeddingCardsImages/D 1.png";
import WeddingCard2 from "../../WeddingCardsImages/D 2.png";
import WeddingCard3 from "../../WeddingCardsImages/D 3.png";
import WeddingCard4 from "../../WeddingCardsImages/D 4.png";
import WeddingCard5 from "../../WeddingCardsImages/D 5.png";
import WeddingCard6 from "../../WeddingCardsImages/D 6.png";
import WeddingCard7 from "../../WeddingCardsImages/D 7.png";
import WeddingCard8 from "../../WeddingCardsImages/D 8.png";
import WeddingCard9 from "../../WeddingCardsImages/D 9.png";
import WeddingCard10 from "../../WeddingCardsImages/D 10.png";
import WeddingCard11 from "../../WeddingCardsImages/D 11.png";
import WeddingCard12 from "../../WeddingCardsImages/D 12.png";
import AOS from "aos";
import "aos/dist/aos.css";
const cards = [
  { id: 1, image: WeddingCard1 },
  { id: 2, image: WeddingCard2 },
  { id: 3, image: WeddingCard3 },
  { id: 4, image: WeddingCard4 },
  { id: 5, image: WeddingCard5 },
  { id: 6, image: WeddingCard6 },
  { id: 7, image: WeddingCard7 },
  { id: 8, image: WeddingCard8 },
  { id: 9, image: WeddingCard9 },
  { id: 10, image: WeddingCard10 },
  { id: 11, image: WeddingCard11 },
  { id: 12, image: WeddingCard12 },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-height: 100vh;
  background-color: #e0f7fa;
  position: relative;
  padding-top: 64px;
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

const BackButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: 3px solid black;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 380px) {
    width: 1.8rem;
    height: 1.8rem;
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
  }
`;

const Title = styled.h1`
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;

    align-items: flex-start;
  }
  @media (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    bottom: 0px;
    padding: 20px;
    background-color: #f5f5f5;
    color: black;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  color: ${(props) => (props.liked ? "#e53935" : "#757575")};
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 330px) {
    width: 2rem;
    height: 2rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const WeddingCardsGrid = () => {
  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 330);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensures animations trigger only once
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 330);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const goBack = () => {
    navigate("/services");
  };

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  return (
    <Container>
      <Header>
        <TitleSection>
          <BackButton onClick={goBack}>
            {isSmallScreen ? (
              <IoArrowBackOutline size={16} />
            ) : (
              <IoArrowBack size={24} />
            )}
          </BackButton>
          <Title>Wedding Cards</Title>
        </TitleSection>
        <Subtitle>
          Celebrate your special day with our exquisite wedding card designs.
          Find the one that suits your style and make your big day
          unforgettable.
        </Subtitle>
      </Header>
      <GridContainer data-aos="fade-up">
        {cards.map((card) => (
          <ImageContainer key={card.id}>
            <img src={card.image} alt={`Card ${card.id}`} />
            <LikeButton
              liked={likedCards[card.id]}
              onClick={() => toggleLike(card.id)}
            >
              {likedCards[card.id] ? <AiFillHeart /> : <AiOutlineHeart />}
            </LikeButton>
          </ImageContainer>
        ))}
      </GridContainer>
    </Container>
  );
};

export default WeddingCardsGrid;
