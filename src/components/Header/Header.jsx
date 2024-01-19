import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import shop from "../../assets/shop.png";
import { LinkContainer } from "react-router-bootstrap";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import { useUser } from "../../utils/context/User/UserContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { signOut } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Déconnexion échouée", error.message);
    }
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/presentation">
              <Nav.Link>Présentation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/card">
              <Nav.Link>Carte</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/localisation">
              <Nav.Link>Localisation</Nav.Link>
            </LinkContainer>
            {isAuthenticated && (
              <>
                <LinkContainer to="/dishes-list">
                  <Nav.Link>Liste des plats</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dishes-add">
                  <Nav.Link>Ajouter un plat</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          <Nav className="ml-auto">
            {isAuthenticated ? (
              <NavDropdown title={auth.currentUser?.email} id="user-dropdown">
                <NavDropdown.Item onClick={handleSignOut}>
                  Déconnexion
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Connexion</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to="/cart">
              <Navbar.Brand>
                <img
                  src={shop}
                  width="30"
                  height="30"
                  color="white"
                  className="d-inline-block align-top"
                  alt="panier"
                />
                Panier
              </Navbar.Brand>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
