import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DisplayBanner1 from "../../DisplayBannerImages/D 13.png";
import DisplayBanner2 from "../../DisplayBannerImages/D 14.png";
import DisplayBanner3 from "../../DisplayBannerImages/D 15.png";
import DisplayBanner4 from "../../DisplayBannerImages/D 16.png";
import DisplayBanner5 from "../../DisplayBannerImages/D 17.png";
import DisplayBanner6 from "../../DisplayBannerImages/D 18.png";
import DisplayBanner7 from "../../DisplayBannerImages/D 19.png";
import DisplayBanner8 from "../../DisplayBannerImages/D 20.png";
import DisplayBanner9 from "../../DisplayBannerImages/D 21.png";
import DisplayBanner10 from "../../DisplayBannerImages/D 22.png";
import DisplayBanner11 from "../../DisplayBannerImages/D 23.png";
import DisplayBanner12 from "../../DisplayBannerImages/D 24.png";
const cards = [
  { id: 1, image: DisplayBanner1 },
  { id: 2, image: DisplayBanner2 },
  { id: 3, image: DisplayBanner3 },
  { id: 4, image: DisplayBanner4 },
  { id: 5, image: DisplayBanner5 },
  { id: 6, image: DisplayBanner6 },
  { id: 7, image: DisplayBanner7 },
  { id: 8, image: DisplayBanner8 },
  { id: 9, image: DisplayBanner9 },
  { id: 10, image: DisplayBanner10 },
  { id: 11, image: DisplayBanner11 },
  { id: 12, image: DisplayBanner12 },
];

const Container = styled.div`
  min-height: 100vh;
  background-color: #e0f7fa;
  padding: 2rem;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 3rem;
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

  &:hover {
    background-color: transparent;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  height: 476px;
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

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const WeddingCardsGrid = () => {
  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();

  const toggleLike = (id) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const goBack = () => {
    navigate("/services");
  };

  return (
    <Container>
      <BackButton onClick={goBack}>←</BackButton>
      <Title>Display Banners</Title>
      <Subtitle>
        Display banners are a powerful tool for grabbing attention and
        communicating your message effectively.
      </Subtitle>
      <GridContainer>
        {cards.map((card) => (
          <ImageContainer key={card.id}>
            <img src={card.image} alt={`Card ${card.id}`} />
            <LikeButton
              liked={likedCards[card.id]}
              onClick={() => toggleLike(card.id)}
            >
              {likedCards[card.id] ? "❤" : "♡"}
            </LikeButton>
          </ImageContainer>
        ))}
      </GridContainer>
    </Container>
  );
};

export default WeddingCardsGrid;
