import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  return (
    <FooterContainer>
      <TopSection>
        <ContactInfo>
          <TitleAndSubtitle>
            <Title>Let's keep in touch!</Title>
            <Subtitle>
              Find us on any of these platforms, we respond 1-2 business days.
            </Subtitle>
          </TitleAndSubtitle>
          <SocialIcons>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </SocialLink>
          </SocialIcons>
        </ContactInfo>
        <LinksContainer>
          <LinksGroup>
            <LinksTitle>USEFULL LINKS</LinksTitle>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/services">Services</StyledLink>
            <StyledLink to="/pricing">Pricing</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </LinksGroup>
          <LinksGroup>
            <LinksTitle>OTHER RESOURCES</LinksTitle>
            <StyledLink to="/terms">Terms & Conditions</StyledLink>
            <StyledLink to="/privacy">Privacy Policy</StyledLink>
            <StyledLink to="/contact">Contact Us</StyledLink>
          </LinksGroup>
        </LinksContainer>
      </TopSection>
      <BottomSection>
        <Copyright>
          Copyright © {new Date().getFullYear()} by Selvapriya Computers.
        </Copyright>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-right: 100px;
  background: #1e1e1e;
  color: #fff;
  padding-top: 36px;
  padding-bottom: 36px;
  margin-left: 100px;
  font-family: "Philosopher", Regular;

  box-sizing: border-box; /* Ensures padding doesn't add extra width */

  @media (max-width: 330px) {
    padding: 20px 10px;
  }
`;

const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; /* Reduce gap for narrow screens */
  max-width: 100%; /* Ensure no overflow */
  margin: 0;

  @media (max-width: 330px) {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center align elements */
    gap: 15px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h2`
  font-family: "Philosopher", serif;
  font-size: 2rem; /* Base font size */
  font-weight: 100;

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

const Subtitle = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  max-width: 750px; /* Limit width for readability */

  color: #aaa;
  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.1rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
  }

  @media (max-width: 576px) {
    font-size: 0.95rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    font-size: 0.9rem; /* Final reduction for very small screens */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px; /* Reduce spacing */
  margin-top: 36px;

  @media (max-width: 330px) {
    gap: 8px;
  }
`;

const SocialLink = styled.a`
  background: #fff;
  color: #111;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e1e1e;
    color: #fff;
    box-shadow: 0 0 0 2px white; /* Add a white circular outline */
  }
  @media (max-width: 330px) {
    width: 30px;
    height: 30px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  min-width: 300px;

  @media (max-width: 330px) {
    flex-direction: column; /* Stack links vertically */
    gap: 10px; /* Reduce spacing */
    align-items: center;
    width: 100%; /* Avoid overflow */
  }
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center for small screens */
  text-align: center; /* Center text alignment */
  gap: 12px;
  @media (max-width: 330px) {
    width: 100%; /* Ensure it adjusts within the viewport */
  }
`;

const LinksTitle = styled.h3`
  font-size: 1.25rem; /* Default font size for larger screens */
  font-weight: 500;
  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.1rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
  }

  @media (max-width: 576px) {
    font-size: 0.95rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    font-size: 0.9rem; /* Final reduction for very small screens */
  }
`;

const StyledLink = styled(Link)`
  color: #939393;
  text-decoration: none;
  font-size: 1rem;

  @media (max-width: 992px) {
    font-size: 0.5 rem;
  }
  @media (max-width: 768px) {
    font-size: 0.375 rem;
  }
  @media (max-width: 330px) {
    font-size: 0.25 rem;
  }
  @media (max-width: 230px) {
    font-size: 0.25 rem;
  }
`;

const BottomSection = styled.div`
  border-top: 2px solid #939393;
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #bbb;
  text-align: center;

  @media (max-width: 330px) {
    font-size: 12px; /* Adjust font size */
    word-wrap: break-word; /* Prevent text overflow */
    padding: 0 5px; /* Add padding to prevent cut-off */
  }
`;
