import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { IoArrowBack, IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const cards = [
  { id: 1, image: "D 1.webp" },
  { id: 2, image: "D 2.webp" },
  { id: 3, image: "D 3.webp" },
  { id: 4, image: "D 4.webp" },
  { id: 5, image: "D 5.webp" },
  { id: 6, image: "D 6.webp" },
  { id: 7, image: "D 7.webp" },
  { id: 8, image: "D 8.webp" },
  { id: 9, image: "D 9.webp" },
  { id: 10, image: "D 10.webp" },
  { id: 11, image: "D 11.webp" },
  { id: 12, image: "D 12.webp" },
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
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const WeddingCardsGrid = () => {
  const [likedCards, setLikedCards] = useState(new Set());
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 330);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 330);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLike = useCallback((id) => {
    setLikedCards((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  }, []);

  const goBack = () => {
    navigate("/services");
  };

  const Card = React.memo(({ card, liked, toggleLike }) => (
    <ImageContainer>
      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/WeddingCardsImages/${card.image}`}
          type="image/webp"
        />
        <img
          src={`${process.env.PUBLIC_URL}/WeddingCardsImages/${card.image}`}
          srcSet={`${process.env.PUBLIC_URL}/WeddingCardsImages/${
            card.image
          } 1x, ${
            process.env.PUBLIC_URL
          }/WeddingCardsImages/${card.image.replace(".webp", "@2x.webp")} 2x`}
          alt={`Wedding card design ${card.id}`}
          loading="lazy"
        />
      </picture>
      <LikeButton
        liked={liked}
        onClick={() => toggleLike(card.id)}
        aria-label={liked ? "Unlike this card" : "Like this card"}
      >
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikeButton>
    </ImageContainer>
  ));
  const cardsList = useMemo(
    () =>
      cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          liked={likedCards.has(card.id)}
          toggleLike={toggleLike}
        />
      )),
    [likedCards, toggleLike]
  );

  return (
    <>
      <Helmet>
        <title>Wedding Cards Collection | Exquisite Designs</title>
        <meta
          name="description"
          content="Explore our exquisite collection of wedding cards. Perfect designs to make your special day unforgettable."
        />
        <meta
          name="keywords"
          content="Wedding cards, Wedding invitations, Custom wedding cards, Wedding card designs"
        />

        {/* Open Graph Meta Tags for SEO and Social Sharing */}
        <meta property="og:title" content="Wedding Cards Collection" />
        <meta
          property="og:description"
          content="Explore our exquisite collection of wedding cards."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/WeddingCardsImages/D 1.webp`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Cards Collection" />
        <meta
          name="twitter:description"
          content="Explore our exquisite collection of wedding cards."
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/WeddingCardsImages/D 1.webp`}
        />
      </Helmet>

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
        <GridContainer data-aos="fade-up">{cardsList}</GridContainer>
      </Container>
    </>
  );
};

export default WeddingCardsGrid;
