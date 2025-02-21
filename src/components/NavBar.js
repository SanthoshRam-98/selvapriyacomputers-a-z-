import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { Helmet } from "react-helmet";
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  width: 100%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 660px) {
    padding: 24px 24px;
  }

  @media (max-width: 330px) {
    padding: 12px 12px;
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
    gap: 8px;
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

  cursor: pointer;

  @media (max-width: 1230px) {
    display: block;
    z-index: 1100;
    padding: 6px;
    border: ${({ isQuoteOpen }) =>
      isQuoteOpen
        ? "2px solid black"
        : "none"}; /* ✅ Border added when Quote Form is open */

    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 420px) {
  }

  @media (max-width: 330px) {
  }
`;

/* Styling the Quote Button */
const QuoteButton = styled(Link)`
  background-color: ${({ isQuoteOpen }) =>
    isQuoteOpen
      ? "black"
      : "pink"}; /* ✅ Ensures background is black only when the form is open */
  color: white;
  font-size: 1rem;
  font-family: "Philosopher", serif;
  padding: 10px 15px;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex; /* ✅ Use inline-flex for proper alignment */
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 1230px) {
    &:hover {
      background: black;
      color: white;
    }
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
    font-size: 0.625rem !important;
    padding: 6px 12px !important;
  }
`;
const StyledFiX = styled(FiX)`
  background: transparent; /* ✅ Ensures no background is inherited */
  color: white;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1230px) {
    color: black;
  }
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 330px) {
    width: 16px;
    height: 16px;
  }
`;

/* Styling the FiMenu (Hamburger Icon) */
const StyledFiMenu = styled(FiMenu)`
  font-size: 1.75rem;
  color: black;
  transition: color 0.3s ease;

  @media (max-width: 420px) {
    font-size: 1.25rem;
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
const NavWrapper = styled.div`
  width: 100%;
  height: auto; /* Ensure auto height */
  position: relative; /* Add this for better stacking context */
`;

// React Component
const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false); // ✅ State for Quote Form
  const location = useLocation();
  const navigate = useNavigate();
  const [prevPage, setPrevPage] = useState("/"); // Default previous page
  const handleQuoteClick = () => {
    setIsQuoteOpen((prev) => !prev);
    setMenuOpen(false); // Ensure menu closes when Quote Form opens
    if (!isQuoteOpen) {
      setPrevPage(
        location.pathname !== "/quoteform" ? location.pathname : prevPage
      );
      navigate("/quoteform");
    } else {
      navigate(prevPage);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
    setIsQuoteOpen(false); // Ensure Quote Form closes when menu opens
  };

  useEffect(() => {
    if (location.pathname === "/quoteform") {
      setIsQuoteOpen(true); // ✅ Ensure <FiX /> appears if on quote form after refresh
    } else {
      setIsQuoteOpen(false); // ✅ Otherwise, reset to default
    }
  }, [location.pathname]); // 🔥 Runs whenever the page changes

  // Dynamic SEO content based on route
  const seoData = {
    "/": {
      title: "Selvapriya Computers - Home",
      description:
        "Discover high-quality printing and design solutions at Selvapriya Computers. Trusted for over 40 years.",
      keywords:
        "Selvapriya Computers, Printing Solutions, Design Services, High-Quality Printing",
    },
    "/services": {
      title: "Our Services - Selvapriya Computers",
      description:
        "Explore a wide range of printing and design services tailored to meet your needs.",
      keywords:
        "Printing Services, Design Solutions, Custom Printing, Selvapriya Computers",
    },
    "/pricing": {
      title: "Pricing - Selvapriya Computers",
      description:
        "Affordable and transparent pricing for high-quality printing and design services.",
      keywords:
        "Printing Pricing, Design Costs, Custom Quotes, Selvapriya Computers",
    },
    "/about": {
      title: "About Us - Selvapriya Computers",
      description:
        "Learn more about Selvapriya Computers, our legacy, values, and commitment to quality.",
      keywords:
        "About Selvapriya Computers, Printing Legacy, Quality Commitment",
    },
    "/contact": {
      title: "Contact Us - Selvapriya Computers",
      description:
        "Get in touch with Selvapriya Computers for inquiries, quotes, and customer support.",
      keywords:
        "Contact Selvapriya Computers, Customer Support, Printing Inquiries",
    },
    "/quoteform": {
      title: "Request a Quote - Selvapriya Computers",
      description:
        "Get a custom quote for your printing and design needs at Selvapriya Computers.",
      keywords:
        "Quote Request, Custom Printing Quote, Design Quote, Selvapriya Computers",
    },
  };

  const currentSeo = seoData[location.pathname] || seoData["/"];
  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/og-image.png`}
        />
      </Helmet>

      <NavWrapper>
        <Nav>
          <LogoWrapper as={Link} to="/" aria-label="Selvapriya Computers Home">
            <CompanyName>Selvapriya</CompanyName>
            <CompanyType>Computers</CompanyType>
          </LogoWrapper>

          <MenuIcon
            isQuoteOpen={isQuoteOpen}
            onClick={() => {
              if (isQuoteOpen) {
                navigate(prevPage);
                setIsQuoteOpen(false);
              } else {
                setMenuOpen(!menuOpen);
              }
            }}
            aria-label="Menu Toggle"
          >
            {isQuoteOpen || menuOpen ? <StyledFiX /> : <StyledFiMenu />}
          </MenuIcon>

          <Menu open={menuOpen}>
            <LinkMenu>
              <MenuItem>
                <StyledLink
                  to="/"
                  active={location.pathname === "/" ? 1 : 0}
                  onClick={handleMenuClick}
                  aria-label="Home"
                >
                  HOME
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/services"
                  active={location.pathname === "/services" ? 1 : 0}
                  onClick={handleMenuClick}
                  aria-label="Services"
                >
                  SERVICES
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/pricing"
                  active={location.pathname === "/pricing" ? 1 : 0}
                  onClick={handleMenuClick}
                  aria-label="Pricing"
                >
                  PRICING
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/about"
                  active={location.pathname === "/about" ? 1 : 0}
                  onClick={handleMenuClick}
                  aria-label="About"
                >
                  ABOUT
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/contact"
                  active={location.pathname === "/contact" ? 1 : 0}
                  onClick={handleMenuClick}
                  aria-label="Contact"
                >
                  CONTACT
                </StyledLink>
              </MenuItem>
            </LinkMenu>
            <MenuItem>
              <QuoteButton
                to={isQuoteOpen ? prevPage : "/quoteform"}
                onClick={handleQuoteClick}
                aria-label="Request a Quote"
              >
                {isQuoteOpen ? <StyledFiX /> : "Get a Quote"}
              </QuoteButton>
            </MenuItem>
          </Menu>
        </Nav>
      </NavWrapper>
    </>
  );
};
export default NavigationBar;
