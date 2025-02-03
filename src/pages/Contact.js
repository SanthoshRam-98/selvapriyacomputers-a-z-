import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Contact from "./HomePage/ContactSection";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your preferred marker icon
  iconSize: [38, 38],
});

export default function ContactPage() {
  const [mapView, setMapView] = useState("map");

  function MapLayerToggle() {
    const map = useMap(); // useMap hook is now inside MapLayerToggle

    useEffect(() => {
      // This ensures the zoom level is deep when the map is rendered
      map.setZoom(18); // Fully zoomed into the location
    }, [map]);

    useEffect(() => {
      const tileLayerUrl =
        mapView === "map"
          ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          : "https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";

      const tileLayerOptions =
        mapView === "map"
          ? {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
          : {
              subdomains: ["0", "1", "2", "3"],
            };

      map.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
          map.removeLayer(layer);
        }
      });

      L.tileLayer(tileLayerUrl, tileLayerOptions).addTo(map);
    }, [map, mapView]);

    return null;
  }

  return (
    <ContactWrapper>
      <ContentContainer>
        <Contact />
        <MapSection>
          <MapContainer
            center={[9.5853, 77.9568]} // Coordinates for the address
            zoom={18} // Fully zoomed into the location
            style={{ height: "100%", width: "100%" }}
          >
            <MapLayerToggle />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[9.5853, 77.9568]} icon={customIcon}>
              <Popup>SelvaPriya Computers</Popup>
            </Marker>
          </MapContainer>

          {/* Controls */}
          <Controls>
            <ViewToggle>
              <ToggleButton
                active={mapView === "map"}
                onClick={() => setMapView("map")}
              >
                Map
              </ToggleButton>
              <ToggleButton
                active={mapView === "satellite"}
                onClick={() => setMapView("satellite")}
              >
                Satellite
              </ToggleButton>
            </ViewToggle>
          </Controls>
        </MapSection>
      </ContentContainer>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.main`
  background-color: #cfe6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  overflow: hidden;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const HeaderSection = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  color: #1e1e1e;
  font: 400 32px Philosopher, Regular;
`;

const MainHeading = styled.h2`
  color: #1e1e1e;
  margin-top: 20px;
  font: 700 48px Philosopher, Regular;
`;

const SubHeading = styled.p`
  color: #1e1e1e;
  margin-top: 20px;
  font: 400 20px Philosopher, Regular;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactDetail = styled.div`
  text-align: center;
`;

const Label = styled.h3`
  color: #6f6f6f;
  font: 400 20px Philosopher, Regular;
`;

const Value = styled.p`
  color: #1e1e1e;
  font: 700 24px Philosopher, Regular;
  white-space: pre-line;
`;

const MapSection = styled.section`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Controls = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 10px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? "#1e1e1e" : "#d9d9d9")};
  color: ${(props) => (props.active ? "#fff" : "#1e1e1e")};
  border: 1px solid #1e1e1e;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #1e1e1e;
    color: #fff;
  }
`;
