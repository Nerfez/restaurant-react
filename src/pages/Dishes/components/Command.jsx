import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ConfirmationCommand from "./ConfirmationCommand";

const Command = ({ cartData }) => {
  const [coordinates, setCoordinates] = useState({
    nom: "",
    adresse: "",
    telephone: "",
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoordinates((prevCoord) => ({ ...prevCoord, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartData.length <= 0) {
      alert("Votre panier est vide.");
      return;
    }

    if (!coordinates.nom.trim()) {
      alert("Veuillez saisir votre nom.");
      return;
    }

    const adresseRegex = /^\d+\s.+/;
    if (!adresseRegex.test(coordinates.adresse.trim())) {
      alert(
        "Veuillez saisir une adresse valide (1 chiffre suivi du nom de rue)."
      );
      return;
    }

    const telephoneRegex = /^\d{10}$/;
    if (!telephoneRegex.test(coordinates.telephone.trim())) {
      alert("Veuillez saisir un numéro de téléphone valide (10 chiffres).");
      return;
    }

    setConfirmationVisible(true);
    console.log("Coordonnées de livraison:", coordinates);
  };

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2>Coordonnées de livraison</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={coordinates.nom}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="adresse">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            name="adresse"
            value={coordinates.adresse}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type="text"
            name="telephone"
            value={coordinates.telephone}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Valider la commande
        </Button>
      </Form>

      {confirmationVisible && <ConfirmationCommand></ConfirmationCommand>}
    </div>
  );
};

export default Command;
