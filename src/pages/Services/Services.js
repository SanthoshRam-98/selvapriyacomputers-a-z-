import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import Product1 from "../../ProductImages/Products-8.png";
import Product2 from "../../ProductImages/Products-7.png";
import Product3 from "../../ProductImages/Products-6.png";
import Product4 from "../../ProductImages/Products-5.png";
import Product5 from "../../ProductImages/Products-4.png";
import Product6 from "../../ProductImages/Products-3.png";
import Product7 from "../../ProductImages/Products-2.png";
import Product8 from "../../ProductImages/Products-10.png";
import Product9 from "../../ProductImages/Products-1.png";
import Product10 from "../../ProductImages/Products-9.png";
import Product11 from "../../ProductImages/Products-11.png";
import Product12 from "../../ProductImages/Products-12.png";

const products = [
  { title: "Wedding Cards", image: Product1 },
  { title: "Display Banners", image: Product2 },
  { title: "Invoice Books", image: Product3 },
  { title: "Notice Prints", image: Product4 },
  { title: "Thamppoolam Bag", image: Product5 },
  { title: "Sunpack Boards", image: Product6 },
  { title: "Photo Printings", image: Product7 },
  { title: "Business Cards", image: Product8 },
  { title: "Letter Pads", image: Product9 },
  { title: "Sign Boards", image: Product10 },
  { title: "Calendars", image: Product11 },
  { title: "Label Stickers", image: Product12 },
];

export function ProductGrid() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensures animations trigger only once
    });
  }, []);

  return (
    <Section>
      <Header>
        <Heading>All Products</Heading>
        <SubHeading>
          Explore our premium range of high-quality printings and customized
          design solutions for your needs.
        </SubHeading>
      </Header>
      <GridContainer data-aos="fade-up">
        {products.map((product, index) => (
          <GridItem key={index}>
            <Link
              to={`/services/${product.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <ImageContainer>
                <img src={product.image} alt={product.title} />
                <Overlay>
                  <ViewMore>View More</ViewMore>
                </Overlay>
              </ImageContainer>
              <Title>
                {product.title}
                <Underline />
              </Title>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </Section>
  );
}

// Styled Components
const Section = styled.section`
  text-align: center;
  background-color: #f5f5f5;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 64px;
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Heading = styled.h1`
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

const SubHeading = styled.p`
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
    background-color: #f5f5f5; /* Change background color */
    color: black; /* Change text color */
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: -100%; /* Initially hidden */
  left: 0;
  right: 0;
  height: 60px; /* Approx height of hover effect */
  background-color: rgba(0, 0, 0, 0.6); /* Default background color */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1;
`;

const ViewMore = styled.span`
  font-size: 18px;
  text-transform: uppercase;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
  position: relative;
  text-decoration: none;
`;

const Underline = styled.div`
  width: 60px;
  height: 3px;
  background-color: black;
  margin: 10px auto 0;
  transition: width 0.3s ease;
`;
const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Entire grid item will have the hover effect */
  &:hover ${ImageContainer} img {
    transform: scale(1.1); /* Image zoom on hover */
  }

  &:hover ${Overlay} {
    bottom: 0px; /* Show overlay on hover */
    padding: 20px;
    background-color: #f5f5f5; /* Change background color */
    color: black; /* Change text color */
  }

  &:hover ${Underline} {
    width: 80px; /* Slightly expand underline on hover */
  }

  /* Ensure no link styles affect the Title */
  a {
    text-decoration: none; /* Prevent default link styling */
    color: inherit; /* Inherit the color of the surrounding text */
  }
`;
export default ProductGrid;
