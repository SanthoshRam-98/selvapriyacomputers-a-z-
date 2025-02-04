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
  padding: 50px 200px;
  background: #e7f2fd;
  border: 2px solid black;
  max-width: 900px;
  margin: auto;
  margin-bottom: 80px;

  @media (max-width: 910px) {
    padding: 50px 100px;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  @media (max-width: 230px) {
    font-size: 0.8rem;
  }
  @media (max-width: 330px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 992px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const SubHeading = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 230px) {
    font-size: 1rem;
  }
  @media (max-width: 330px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 2.5rem;
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 0.85rem;
  color: #555;
  line-height: 1.6;
  margin: 0 auto 30px;
  max-width: 80%;

  @media (max-width: 230px) {
    font-size: 0.45rem;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem; /* Smaller font for tiny screens */
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  padding: 30px 50px;

  @media (max-width: 910px) {
    padding: 30px 30px;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;

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
  margin-bottom: 15px;
`;

const BoxHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BoxText = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
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
      <Heading>Why Choose Us</Heading>
      <SubHeading>Quality That Speaks for Itself</SubHeading>
      <Text>
        With decades of experience, we know that quality can never be
        compromised. Each project is handled with precision and attention to
        detail, ensuring your satisfaction every time.
      </Text>
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
