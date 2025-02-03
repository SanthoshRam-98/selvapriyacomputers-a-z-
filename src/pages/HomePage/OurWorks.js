import React from "react";
import styled from "styled-components";

// Example local image imports
import image1 from "../../OurWorksImages/Component 1.png";
import image2 from "../../OurWorksImages/Component 2.png";
import image3 from "../../OurWorksImages/Component 3.png";
import image4 from "../../OurWorksImages/Component 4.png";
import image5 from "../../OurWorksImages/Component 5.png";
import image6 from "../../OurWorksImages/Component 6.png";
import image7 from "../../OurWorksImages/Component 7.png";
import image8 from "../../OurWorksImages/Component 8.png";
import image9 from "../../OurWorksImages/Component 9.png";
import image10 from "../../OurWorksImages/Component 10.png";
import image11 from "../../OurWorksImages/Component 11.png";
import image12 from "../../OurWorksImages/Component 12.png";
const items = [
  {
    id: 1,
    image: image1,
    text: "Wedding Cards",
    bgColor: "rgba(255, 228, 225, 1)",
  },
  {
    id: 2,
    image: image2,
    text: "Display Banners",
    bgColor: "rgba(240, 248, 255, 1)",
  },
  {
    id: 3,
    image: image3,
    text: "Invoice Books",
    bgColor: "rgba(245, 245, 220, 1)",
  },
  {
    id: 4,
    image: image4,
    text: "Notice Prints",
    bgColor: "rgba(255, 235, 205, 1)",
  },
  {
    id: 5,
    image: image5,
    text: "Thampoolam Baf",
    bgColor: "rgba(255, 239, 213, 1)",
  },
  {
    id: 6,
    image: image6,
    text: "Sunpack Boards",
    bgColor: "rgba(240, 255, 240, 1)",
  },
  {
    id: 7,
    image: image7,
    text: "Photo Prints",
    bgColor: "rgba(255, 228, 181, 1)",
  },
  {
    id: 8,
    image: image8,
    text: "Buisness Cards",
    bgColor: "rgba(240, 255, 255, 1)",
  },
  {
    id: 9,
    image: image9,
    text: "Letter Pads",
    bgColor: "rgba(240, 255, 255, 1)",
  },
  {
    id: 10,
    image: image10,
    text: "Sign Boards",
    bgColor: "rgba(240, 255, 255, 1)",
  },
  {
    id: 11,
    image: image11,
    text: "Calendars",
    bgColor: "rgba(240, 255, 255, 1)",
  },
  {
    id: 12,
    image: image12,
    text: "Label Stickers",
    bgColor: "rgba(240, 255, 255, 1)",
  },
];

const PremiumPrintingSolutions = () => {
  return (
    <div>
      <Container>
        <Header>
          <h3>Our Works</h3>
          <h1>Premium Printing Solutions</h1>
          <p>
            Delivering high-quality printing, custom designs, and premium
            printer solutions tailored to meet every need.
          </p>
        </Header>
        <Grid>
          {items.map((item) => (
            <GridItem key={item.id}>
              <Image src={item.image} alt={item.text} />
              <Overlay>{item.text}</Overlay>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <BannerContainer>
        <p>
          "Creating high-quality print solutions and custom designs, from
          concept to completion, with precision and dedication"
        </p>
      </BannerContainer>
    </div>
  );
};

const Container = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
  font-family: "Philosopher", Regular;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ccc;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #aaa;
  }
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

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

const GridItem = styled.div`
  background-color: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover div {
    opacity: 1;
    background-color: #ffaaaa; /* Rose color */
    color: #000; /* White text */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;
const BannerContainer = styled.div`
  font-family: "Philosopher", Italic;
  text-align: center;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 1rem;
  margin-bottom: 5px;
`;
export default PremiumPrintingSolutions;
