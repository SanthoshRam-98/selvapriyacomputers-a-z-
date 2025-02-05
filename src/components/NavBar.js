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
  padding: 15px 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky; /* ✅ Makes the navbar sticky */
  top: 0; /* ✅ Sticks to the top */
  z-index: 1001; /* ✅ Ensures it stays above other content */
`;

const LogoWrapper = styled.div`
  color: rgba(30, 30, 30, 1);
  font-weight: 500;
  text-align: left;

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
`;

const CompanyType = styled.span`
  font-weight: 400;
  font-size: 20px;
  display: block;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: stretch;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensure it appears above other content */
    padding: 20px 0;
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-family: "Philosopher", ${({ active }) => (active ? "Bold" : "Regular")};
  font-size: 16px;
  color: ${({ active }) => (active ? "pink" : "black")};
  font-weight: ${({ active }) =>
    active ? "bold" : "normal"}; /* Use normal for non-active links */

  &:hover {
    color: pink;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
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

  &:hover {
    background-color: #ffaaaa;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

// React Component
const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false); // ✅ State for Quote Form
  const location = useLocation();

  return (
    <Nav>
      <LogoWrapper>
        <CompanyName>Selvapriya</CompanyName>
        <CompanyType>Computers</CompanyType>
      </LogoWrapper>

      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>

      <Menu open={menuOpen}>
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
