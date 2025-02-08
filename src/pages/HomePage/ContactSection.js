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
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 36px;
`;

const Title = styled.h1`
  font-size: 2rem; /* Base font size */
  font-weight: 100;

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
const MainHeading = styled.h2`
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
  @media (max-width: 420px) {
    font-size: 1.6rem; /* Final reduction for very small screens */
  }
  @media (max-width: 330px) {
    font-size: 1.3rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;
const SubHeading = styled.p`
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
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  max-width: 750px; /* Limit width for readability */
  margin: 0 auto; /* Center-align text */
  color: #6f6f6f;
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

const InfoValue = styled.p`
  font-size: 1.5rem;
  margin: 0;
  text-align: center; /* Centers text */
  font-weight: bold;
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

export default ContactPage;
