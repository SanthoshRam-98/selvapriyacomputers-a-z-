import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  const contactInfo = {
    email: {
      label: "Email",
      value: "Selvapriyacomputer@gmail.com",
    },
    phone: {
      label: "Phone",
      value: "+91 - 96559 26967",
    },
    address: {
      label: "Address",
      value: [
        "30th, Karmega Nadar Street,",
        "VRD 18, Milk depo near Thalavaipuram, Chettiyarpatti,",
        "Virudhunagar District - 626122",
      ],
    },
  };

  return (
    <MainContainer>
      <ContactContainer role="region" aria-label="Contact Information">
        <ContactHeader />
        <ContactInfo contactData={contactInfo} />
      </ContactContainer>
    </MainContainer>
  );
};

const ContactHeader = () => (
  <HeaderWrapper>
    <Title>Contact Us</Title>
    <MainHeading>Get in Touch with SelvaPriya Computers</MainHeading>
    <SubHeading>
      Have questions, or ready to start your next project? Reach out to us
      today!
    </SubHeading>
  </HeaderWrapper>
);

const ContactInfo = ({ contactData }) => (
  <InfoWrapper>
    {Object.entries(contactData).map(([key, info], index) => (
      <InfoSection key={index}>
        <InfoLabel>{info.label}</InfoLabel>
        {Array.isArray(info.value) ? (
          info.value.map((line, i) => <InfoValue key={i}>{line}</InfoValue>)
        ) : (
          <InfoValue>{info.value}</InfoValue>
        )}
      </InfoSection>
    ))}
  </InfoWrapper>
);

// Styled Components
const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  font-family: "Philosopher", Regular;
  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 631px;
  width: 100%;
  align-items: center;
  text-align: center;
  color: rgb(30, 30, 30);
  font-family: "Philosopher", Regular;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const HeaderWrapper = styled.header`
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const MainHeading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin: 36px 0;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 24px 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 16px 0;
  }
`;

const SubHeading = styled.p`
  font-size: 20px;
  margin: 36px 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 24px 0 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 16px 0 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoLabel = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const InfoValue = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 8px 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export default ContactPage;
