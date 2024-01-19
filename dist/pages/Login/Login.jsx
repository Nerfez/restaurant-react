import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Form, Button } from "react-bootstrap";
import { useUser } from "../../utils/context/User/UserContext";

const Login = () => {
  const { signUp, signIn } = useUser();
  const [email, setEmail] = useState("colivier@diginamic-formation.fr");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      alert("La connexion à échouée, verifiez vos identifiants de connexion");
      console.error("Création échouée", error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordFilled = password.trim() !== "";

    if (isValidEmail && isPasswordFilled) {
      try {
        await signIn(email, password);
        navigate("/home");
      } catch (error) {
        alert("La connexion à échouée, verifiez vos identifiants de connexion");
        console.error("Connexion échouée", error.message);
      }
    } else {
      alert(
        "Veuillez saisir une adresse email valide et remplir le mot de passe."
      );
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h2>Page de connexion</h2>
        <Form onSubmit={handleSignIn}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" style={{ marginBottom: "20px" }}>
            <Form.Label>Mot de passe:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "20px" }}
          >
            Connexion
          </Button>
          <Button variant="success" onClick={handleSignUp}>
            S inscrire
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
