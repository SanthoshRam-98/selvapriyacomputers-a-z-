import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import QuotationForm from "../pages/QuotationForm"; // Import the form component

// Global Styles
// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Philosopher', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  position: fixed; /* Keep the navbar fixed */
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 9999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 660px) {
    padding: 20px 50px;
  }
  @media (max-width: 420px) {
  }
  @media (max-width: 330px) {
    padding: 10px 20px;
  }
`;

const LogoWrapper = styled.div`
  color: rgba(30, 30, 30, 1);
  font-weight: 500;
  text-align: left;
  text-decoration: none; /* Removes the underline */
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const CompanyName = styled.span`
  font-weight: bold;
  font-size: 2.25rem; /* 36px */
  color: rgba(30, 30, 30, 1);
  display: block;

  @media (max-width: 1200px) {
    font-size: 2rem; /* 32px */
  }

  @media (max-width: 992px) {
    font-size: 1.75rem; /* 28px */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* 24px */
  }

  @media (max-width: 420px) {
    font-size: 1.375rem; /* 14.4px */
    margin: auto;
  }

  @media (max-width: 330px) {
    font-size: 0.875rem; /* 12px */
  }
`;

const CompanyType = styled.span`
  text-align: right;
  font-weight: 400;
  font-size: 1.25rem; /* 20px */
  display: block;

  @media (max-width: 1200px) {
    font-size: 1.125rem; /* 18px */
  }

  @media (max-width: 992px) {
    font-size: 1.0625rem; /* 17px */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* 16px */
  }

  @media (max-width: 420px) {
    font-size: 0.75rem; /* 12px */
    margin: auto;
  }

  @media (max-width: 330px) {
    font-size: 0.625rem; /* 10px */
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 178px;

  @media (max-width: 1230px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 50%;
    height: 100vh;
    background: white;
    box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
    padding: 80px 24px;
    z-index: 1000;
    transition: right 0.3s ease-in-out;
    gap: 32px;
  }
`;

const MenuItem = styled.li`
  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
  }
  @media (max-width: 1230px) {
    padding: 12px 24px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 12px 24px;
  font-family: "Philosopher", serif;
  font-size: 16px;
  color: ${({ active }) =>
    active ? "#FFAAAA" : "black"}; /* Active links are light red */

  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out; /* Smooth transition */

  &:hover {
    ${({ active }) =>
      !active &&
      `
      color: black;
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6); /* Fake bold effect */
    `}
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8125rem;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem; /* Smaller font size for better spacing */
    padding: 8px 16px; /* Adjusted padding */
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.75rem;
  cursor: pointer;

  @media (max-width: 1230px) {
    display: block;
    z-index: 1100;
  }
  @media (max-width: 420px) {
    font-size: 1.25rem; /* 20px */
  }

  @media (max-width: 330px) {
    font-size: 1.125rem; /* 18px */
  }
`;

const QuoteButton = styled(Link)`
  background-color: pink;
  color: white;
  font-size: 1rem;
  font-family: "Philosopher", serif;
  padding: 10px 15px;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  margin-left: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
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

const LinkMenu = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 660px) {
    gap: 4px; /* Halved gap below 660px */
  }

  @media (max-width: 1230px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 330px) {
    gap: 2px; /* Further reduced gap */
  }
`;

// React Component
const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false); // ✅ State for Quote Form
  const location = useLocation();

  return (
    <Nav>
      <GlobalStyle />
      <LogoWrapper as={Link} to="/">
        <CompanyName>Selvapriya</CompanyName>
        <CompanyType>Computers</CompanyType>
      </LogoWrapper>

      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>

      <Menu open={menuOpen}>
        <LinkMenu>
          <MenuItem>
            <StyledLink to="/" active={location.pathname === "/" ? 1 : 0}>
              HOME
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/services"
              active={location.pathname === "/services" ? 1 : 0}
            >
              SERVICES
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/pricing"
              active={location.pathname === "/pricing" ? 1 : 0}
            >
              PRICING
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/about"
              active={location.pathname === "/about" ? 1 : 0}
            >
              ABOUT
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/contact"
              active={location.pathname === "/contact" ? 1 : 0}
            >
              CONTACT
            </StyledLink>
          </MenuItem>
        </LinkMenu>
        <MenuItem>
          <QuoteButton onClick={() => setIsQuoteOpen(true)}>
            Get a Quote
          </QuoteButton>
        </MenuItem>
        <QuotationForm
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />
      </Menu>
    </Nav>
  );
};

export default NavigationBar;
