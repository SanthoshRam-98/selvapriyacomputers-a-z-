import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import QuotationForm from "../pages/QuotationForm"; // Import the form component
// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 100px;
  height: auto;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1001;

  @media (max-width: 660px) {
    padding: 10px 50px; /* Halved padding below 660px */
  }
  @media (max-width: 330px) {
    padding: 5px 25px; /* Further reduced padding for ultra-small screens */
  }
`;

const LogoWrapper = styled.div`
  color: rgba(30, 30, 30, 1);
  font-weight: 500;
  text-align: left;
  text-decoration: none; /* Removes the underline */
  @media (max-width: 991px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const CompanyName = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: rgba(30, 30, 30, 1);
  display: block;
  @media (max-width: 330px) {
    font-size: 28px; /* Reduced font size for smaller screens */
  }
`;

const CompanyType = styled.span`
  text-align: right;
  font-weight: 400;
  font-size: 20px;
  display: block;
  @media (max-width: 330px) {
    font-size: 16px; /* Adjusted font size */
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 64px;

  @media (max-width: 660px) {
    gap: 32px; /* Halved spacing below 660px */
  }

  @media (max-width: 1130px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 12px 24px;
    z-index: 1000;
    gap: 32px;
  }
  @media (max-width: 330px) {
    gap: 16px; /* Further halved below 330px */
  }
`;

const MenuItem = styled.li`
  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
  }
  @media (max-width: 1130px) {
    padding: 12px 24px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 12px 24px;
  font-family: "Philosopher", ${({ active }) => (active ? "Bold" : "Regular")};
  font-size: 16px;
  color: ${({ active }) =>
    active ? "#FFAAAA" : "black"}; /* Active links are light red */
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out; /* Smooth transition */

  &:hover {
    ${({ active }) =>
      !active &&
      `
      color: black;
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6); /* Fake bold effect */
    `}
  }
  @media (max-width: 330px) {
    font-size: 14px; /* Smaller font size for better spacing */
    padding: 8px 16px; /* Adjusted padding */
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 1130px) {
    display: block;
  }
`;

// Get a Quote Button
const QuoteButton = styled(Link)`
  background-color: pink;
  color: white;
  font-size: 16px;
  font-family: "Philosoper", Regular;
  padding: 10px 15px;
  text-decoration: none;
  white-space: nowrap; /* Prevents text from wrapping */
  display: inline-block;
  text-align: center;
  margin-left: auto; /* Ensures it stays aligned */
  transition: background-color 0.5s ease;
  &:hover {
    background-color: black;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
  @media (max-width: 330px) {
    font-size: 14px; /* Adjusted font size */
    padding: 8px 12px; /* Reduced padding */
  }
`;
const GetAQuote = styled.div``;
const LinkMenu = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 660px) {
    gap: 4px; /* Halved gap below 660px */
  }

  @media (max-width: 1130px) {
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
        <GetAQuote>
          <MenuItem>
            <QuoteButton onClick={() => setIsQuoteOpen(true)}>
              Get a Quote
            </QuoteButton>
          </MenuItem>
        </GetAQuote>
        <QuotationForm
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />
      </Menu>
    </Nav>
  );
};

export default NavigationBar;
