import React from "react";
import styled from "styled-components";

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
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
`;

const SubHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin: 0 auto 30px;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px;
    max-width: 95%;
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
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our top priority, and we tailor our services to meet your unique needs. Our team goes the extra mile to ensure each project is handled with care and precision.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    },
    {
      title: "Innovation",
      description:
        "At SelvaPriya Computers, we stay ahead by adopting the latest trends and technologies in printing and design. Our innovative approach allows us to deliver fresh, impactful solutions.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
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
