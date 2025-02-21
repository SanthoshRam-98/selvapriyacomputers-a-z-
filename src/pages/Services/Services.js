import React, { useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// Product Data with Dynamic Image Import
const products = [
  { title: "Wedding Cards", image: "Products-8.webp" },
  { title: "Display Banners", image: "Products-7.webp" },
  { title: "Invoice Books", image: "Products-6.webp" },
  { title: "Notice Prints", image: "Products-5.webp" },
  { title: "Thamppoolam Bag", image: "Products-4.webp" },
  { title: "Sunpack Boards", image: "Products-3.webp" },
  { title: "Photo Printings", image: "Products-2.webp" },
  { title: "Business Cards", image: "Products-10.webp" },
  { title: "Letter Pads", image: "Products-1.webp" },
  { title: "Sign Boards", image: "Products-9.webp" },
  { title: "Calendars", image: "Products-11.webp" },
  { title: "Label Stickers", image: "Products-12.webp" },
];

export function ProductGrid() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const generateUrl = useCallback(
    (title) => `/services/${title.toLowerCase().replace(/\s+/g, "-")}`,
    []
  );

  const renderedProductList = useMemo(
    () =>
      products.map((product, index) => (
        <GridItem
          key={`${product.title}-${index}`}
          itemScope
          itemType="https://schema.org/Product"
        >
          <Link to={generateUrl(product.title)} itemProp="url">
            <figure>
              <ImageContainer as={motion.div} whileHover={{ scale: 1.05 }}>
                <img
                  src={`${process.env.PUBLIC_URL}/ProductImages/${product.image}`}
                  srcSet={`${process.env.PUBLIC_URL}/ProductImages/${product.image} 1x, ${process.env.PUBLIC_URL}/ProductImages/${product.image} 2x`}
                  alt={`${product.title} - High-Quality Premium Printing Solution`}
                  loading="lazy"
                  width="300"
                  height="300"
                  itemProp="image"
                />
                <Overlay>
                  <ViewMore aria-label="View more about this product">
                    View More
                  </ViewMore>
                </Overlay>
              </ImageContainer>
              <figcaption>
                <Title itemProp="name">
                  {product.title}
                  <Underline aria-hidden="true" />
                </Title>
              </figcaption>
            </figure>
          </Link>
        </GridItem>
      )),
    [generateUrl]
  );

  return (
    <>
      <Helmet>
        <title>Our Products | Premium Printing Solutions</title>
        <meta
          name="description"
          content="Explore our premium range of high-quality printings and customized design solutions. From wedding cards to business essentials, find what you need."
        />
        <meta
          name="keywords"
          content="Printing solutions, Wedding cards, Business cards, Custom designs, High-quality printings"
        />
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Our Products | Premium Printing Solutions"
        />
        <meta
          property="og:description"
          content="Discover high-quality printings and customized design solutions for weddings, businesses, and more."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/ProductImages/${products[0]?.image}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Products | Premium Printing Solutions"
        />
        <meta
          name="twitter:description"
          content="Explore our premium range of high-quality printings and customized designs."
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/ProductImages/${products[0]?.image}`}
        />

        {/* JSON-LD Structured Data for Product SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            name: "Premium Printing Solutions",
            description:
              "Explore high-quality printings and customized design solutions.",
            url: window.location.href,
            product: products.map((product) => ({
              "@type": "Product",
              name: product.title,
              image: `${process.env.PUBLIC_URL}/ProductImages/${product.image}`,
              url: generateUrl(product.title),
              description: `${product.title} - High-Quality Premium Printing Solution`,
            })),
          })}
        </script>

        {/* Prefetch Links for Better Performance */}
        {products.map((product) => (
          <link
            rel="prefetch"
            href={generateUrl(product.title)}
            key={product.title}
          />
        ))}
      </Helmet>

      <Section>
        <Header>
          <Heading>All Products</Heading>
          <SubHeading>
            Explore our premium range of high-quality printings and customized
            design solutions for your needs.
          </SubHeading>
        </Header>
        <GridContainer data-aos="fade-up">{renderedProductList}</GridContainer>
      </Section>
    </>
  );
}

// Styled Components (No Change Needed)
const Section = styled.section`
  text-align: center;
  background-color: #f5f5f5;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 64px 100px;
  @media (max-width: 660px) {
    padding: 64px 24px;
  }
  @media (max-width: 330px) {
    padding: 64px 12px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Heading = styled.h1`
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
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto;
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
`;

const Overlay = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  right: 0;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
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
  &:hover ${ImageContainer} img {
    transform: scale(1.1);
  }
  &:hover ${Overlay} {
    bottom: 0px;
    padding: 20px;
    background-color: #f5f5f5;
    color: black;
  }
  &:hover ${Underline} {
    width: 80px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default ProductGrid;
