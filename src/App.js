import React, { useState } from "react";
import "../src/App.css"; // or import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/Services/Services";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import QuotationForm from "./pages/QuotationForm";
import WeddingCards from "./pages/Services/WeddingCards";
import BusinessCards from "./pages/Services/BuisnessCards";
import Calendars from "./pages/Services/Calendars";
import DisplayBanner from "./pages/Services/DisplayBanner";
import InvoiceBooks from "./pages/Services/InvoiceBooks";
import LabelStickers from "./pages/Services/LabelStickers";
import LetterPads from "./pages/Services/LetterPads";
import NoticePrints from "./pages/Services/NoticePrints";
import PhotoPrintings from "./pages/Services/PhotoPrintings";
import SignBoards from "./pages/Services/SignBoards";
import SunpackBoards from "./pages/Services/SunpackBoards";
import ThampoolamBag from "./pages/Services/ThampoolamBaf";
import TermsAndConditions from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleQuoteClick = () => {
    setIsQuoteOpen(!isQuoteOpen);
  };

  return (
    <Router>
      <AppContainer>
        <NavigationBar onQuoteClick={handleQuoteClick} />
        {/* <QuotationForm isOpen={showQuotation} onClose={handleQuoteClick} /> */}
        <MainContent $isBlurred={isQuoteOpen}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/wedding-cards" element={<WeddingCards />} />
            <Route
              path="/services/business-cards"
              element={<BusinessCards />}
            />
            <Route path="/services/calendars" element={<Calendars />} />
            <Route
              path="/services/display-banners"
              element={<DisplayBanner />}
            />
            <Route path="/services/invoice-books" element={<InvoiceBooks />} />
            <Route
              path="/services/label-stickers"
              element={<LabelStickers />}
            />
            <Route path="/services/letter-pads" element={<LetterPads />} />
            <Route path="/services/notice-prints" element={<NoticePrints />} />
            <Route
              path="/services/photo-printings"
              element={<PhotoPrintings />}
            />
            <Route path="/services/sign-boards" element={<SignBoards />} />
            <Route
              path="/services/sunpack-boards"
              element={<SunpackBoards />}
            />
            <Route
              path="/services/thampoolam-bag"
              element={<ThampoolamBag />}
            />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/quoteform" element={<QuotationForm />} />
            {/* <QuotationForm isOpen={isQuoteOpen} onClose={handleQuoteClick} /> */}
          </Routes>
        </MainContent>
      </AppContainer>
      <FooterContainers>
        <Footer />
      </FooterContainers>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1; /* Allow the main content to grow and push the footer down */
`;

const FooterContainers = styled.div`
  background: #1e1e1e;
`;

export default App;
