import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const { count } = useSelector((state) => state.pokedex);

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
      {/* // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
      <Container>
        <NavbarBrand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            alt=""
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/pokedex">Pokedex {count}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
