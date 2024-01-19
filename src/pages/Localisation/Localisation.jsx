import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Localisation = () => {
  const restaurantCoordinates = [48.294502697146484, 4.069680398066265];

  return (
    <>
      <Header></Header>
      <Container>
        <h2 style={{ marginTop: "10px" }}>Localisation du restaurant</h2>
        <MapContainer
          center={restaurantCoordinates}
          zoom={15}
          style={{ height: "750px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={restaurantCoordinates}>
            <Popup>3 Brasseurs</Popup>
          </Marker>
        </MapContainer>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Localisation;
