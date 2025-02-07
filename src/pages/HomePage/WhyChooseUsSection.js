import React from "react";
import styled from "styled-components";
import Reliability from "../../WhyChooseUsIcons/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae.png";
import CustomerFocus from "../../WhyChooseUsIcons/b0192ed4bee0374317c54a6df9985bac3396afaa7af92dd65d6527f93833d7a5.png";
import Innovation from "../../WhyChooseUsIcons/f61db3384504bc3b9107b107fe907cc3019427cba15d2bc0ae2690bb2249d130.png";
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e7f2fd;
  margin: 0;
`;

const Heading = styled.h3`
  font-family: "Philosopher", serif;
  font-size: 2rem; /* Base font size */
  font-weight: 100;
  color: #333;
  margin: auto;

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

const SubHeading = styled.h1`
  font-size: 3rem; /* Base font size for large screens */
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 330px) {
    font-size: 1.3rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;
const Text = styled.p`
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

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 110px 220px;
  border: 4px solid black;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 100px;
  gap: 64px;
  @media (max-width: 768px) {
    padding: 60px 75px;
  }
  @media (max-width: 992px) {
    padding: 75px 80px;
  }
  @media (max-width: 660px) {
    padding: 40px 50px;
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 420px) {
    padding: 25px 35px;
  }
  @media (max-width: 330px) {
    padding: 20px 25px;
    margin-right: 20px;
    margin-left: 20px;
  }
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
    padding: 15px;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
`;

const BoxHeading = styled.h3`
  font-family: "Philosopher", serif;
  font-size: 2rem; /* Base font size */
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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 92px;
  margin-bottom: 98px;
  width: 100%;
`;
const WhyChooseUsSection = () => {
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
    <SectionContainer>
      <HeaderContainer>
        <Heading>Why Choose Us</Heading>
        <SubHeading>Quality That Speaks for Itself</SubHeading>
        <Text>
          With decades of experience, we know that quality can never be
          compromised. Each project is handled with precision and attention to
          detail, ensuring your satisfaction every time.
        </Text>
      </HeaderContainer>
      <BoxContainer>
        {data.map((item, index) => (
          <Box key={index}>
            <Icon src={item.icon} alt={item.title} />
            <BoxHeading>{item.title}</BoxHeading>
            <BoxText>{item.description}</BoxText>
          </Box>
        ))}
      </BoxContainer>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;
