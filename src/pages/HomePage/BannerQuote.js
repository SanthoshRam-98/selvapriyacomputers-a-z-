import React from "react";
import styled from "styled-components";
const BannerQuote = () => {
  return (
    <BannerContainer>
      "Creating high-quality print solutions and custom designs, from concept to
      completion, with precision and dedication"
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  font-size: 1.5rem;
  font-style: italic;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 100px;
  padding-left: 100px;
  margin: 0;
  text-align: center; /* Centers text */
  border-top: 4px solid white; /* Top stroke */
  border-bottom: 4px solid white; /* Bottom stroke */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 660px) {
    font-size: 1rem;
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 420px) {
    font-size: 0.75rem;
  }
  @media (max-width: 330px) {
    font-size: 0.625rem; /* Smaller font for tiny screens */
    padding-right: 12px;
    padding-left: 12px;
  }
  @media (max-width: 230px) {
    font-size: 0.5rem;
  }
`;

export default BannerQuote;
