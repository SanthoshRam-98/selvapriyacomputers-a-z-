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
  font-size: 1.2rem;
  margin: 0;

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
  }
`;

const MainHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 36px 0;

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
  }
`;

const SubHeading = styled.p`
  font-size: 0.85rem;
  margin: 36px 0 0;

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
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;

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
  }
`;

const InfoValue = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin: 8px 0 0;

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

export default ContactPage;
