import React from "react";
import styled from "styled-components";
import Reliability from "../../WhyChooseUsIcons/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae.png";
import CustomerFocus from "../../WhyChooseUsIcons/b0192ed4bee0374317c54a6df9985bac3396afaa7af92dd65d6527f93833d7a5.png";
import Innovation from "../../WhyChooseUsIcons/f61db3384504bc3b9107b107fe907cc3019427cba15d2bc0ae2690bb2249d130.png";

// Styled Components
const StyledBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  background: #e7f2fd;
  padding-bottom: 64px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (max-width: 910px) {
    max-width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;

  @media (max-width: 420px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 330px) {
    width: 30px;
    height: 30px;
  }
`;

const BoxHeading = styled.h3`
  font-family: "Philosopher", serif;
  font-size: 2rem;
  font-weight: 800;
  color: #333;
  margin: auto;

  @media (max-width: 992px) {
    font-size: 2rem;
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

const BoxText = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  max-width: 750px; /* Limit width for readability */
  margin: 0 auto; /* Center-align text */

  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.1rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
    line-height: 1.5; /* Adjust line height for compact text */
  }

  @media (max-width: 576px) {
    font-size: 0.95rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    font-size: 0.9rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-right: 100px;
  margin-left: 100px;
  border: 4px solid black;
  padding: 100px;
  align-items: center;
  @media (max-width: 992px) {
    padding: 50px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 660px) {
    padding: 30px;
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    gap: 28px;
  }
  @media (max-width: 360px) {
    padding: 15px;
    margin-right: 20px;
    margin-left: 20px;
    gap: 24px;
  }
`;
const BoxContainer = () => {
  const data = [
    {
      title: "Reliability",
      description:
        "With over 40 years in the industry, we bring unmatched expertise and dedication to every project. Our proven track record of quality and reliability has built lasting client relationships.",
      icon: Reliability,
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our top priority, and we tailor our services to meet your unique needs. Our team goes the extra mile to ensure each project is handled with care and precision.",
      icon: CustomerFocus,
    },
    {
      title: "Innovation",
      description:
        "At SelvaPriya Computers, we stay ahead by adopting the latest trends and technologies in printing and design. Our innovative approach allows us to deliver fresh, impactful solutions.",
      icon: Innovation,
    },
  ];

  return (
    <StyledBoxContainer>
      <Container>
        {data.map((item, index) => (
          <Box key={index}>
            <Icon src={item.icon} alt={item.title} />
            <BoxHeading>{item.title}</BoxHeading>
            <BoxText>{item.description}</BoxText>
          </Box>
        ))}
      </Container>
    </StyledBoxContainer>
  );
};

export default BoxContainer;
