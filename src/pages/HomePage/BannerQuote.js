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
  padding: 24px;
  margin: 0 auto; /* Center horizontally */
  text-align: center; /* Centers text */
  border-top: 4px solid white; /* Top stroke */
  border-bottom: 4px solid white; /* Bottom stroke */

  @media (max-width: 1200px) {
    max-width: calc(100% - 40px); /* Reduces margins for smaller screens */
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 20px); /* Further reduces margins on small screens */
    font-size: 1.2rem;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem; /* Smaller font for tiny screens */
  }
  @media (max-width: 230px) {
    font-size: 0.45rem;
  }
`;

export default BannerQuote;
