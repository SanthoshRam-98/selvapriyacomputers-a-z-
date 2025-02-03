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
          <Title>Let's keep in touch!</Title>
          <Subtitle>
            Find us on any of these platforms, we respond 1-2 business days.
          </Subtitle>
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
  background: #111;
  color: #fff;
  padding: 40px 20px; /* Ensure padding is not too large */
  font-family: "Philosopher", Regular;
  overflow: hidden; /* Prevent content overflow */

  @media (max-width: 330px) {
    padding: 20px 10px; /* Adjust padding for narrow viewports */
  }
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; /* Reduce gap for narrow screens */
  max-width: 100%; /* Ensure no overflow */
  margin: 0 auto;

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
  font-size: 24px;
  font-weight: 600;
  max-width: 100%; /* Ensures it doesn't overflow */
  text-align: left; /* Default alignment */

  @media (max-width: 330px) {
    font-size: 16px; /* Reduce size for very small screens */
    text-align: center; /* Center align */
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #bbb;
  max-width: 100%;
  line-height: 1.4;
  text-align: left;

  @media (max-width: 330px) {
    font-size: 12px; /* Reduce size */
    overflow-wrap: break-word;
    white-space: normal;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px; /* Reduce spacing */
  margin-top: 10px;
  justify-content: center; /* Center align icons for narrow screens */

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

  @media (max-width: 330px) {
    width: 100%; /* Ensure it adjusts within the viewport */
  }
`;

const LinksTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 330px) {
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 5px;

  &:hover {
  }
  @media (max-width: 330px) {
    font-size: 10px;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #333;
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
