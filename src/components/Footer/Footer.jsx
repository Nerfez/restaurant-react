import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark" fixed="bottom">
      <Container>
        <Nav className="me-auto">
          <Link to="/dishes-list" className="nav-link">
            Gestion du Stock
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
