import React from "react";
import styled from "styled-components";
import Contact from "./HomePage/ContactSection";

const MapContainer = styled.div`
  width: 100vw; /* Full width of the viewport */
  height: 450px;
  overflow: hidden; /* Ensures no unwanted gaps */
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block; /* Prevents extra spacing */
  }
`;

const Container = styled.div`
  padding-top: 64px;
  width: 100%;
  margin-bottom: 0; /* Ensures no margin at the bottom */
  padding-bottom: 0 !important; /* Overrides any padding */
`;

const GoogleMap = () => {
  return (
    <Container>
      <Contact />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.327330139446!2d77.49267027478533!3d9.392642590683915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ebc185f2348b%3A0x6d78be89d840c498!2sKarmega%20Nadar%20St%2C%20Dhalavaipuram%2C%20Tamil%20Nadu%20626188!5e0!3m2!1sen!2sin!4v1739726291642!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </Container>
  );
};

export default GoogleMap;
