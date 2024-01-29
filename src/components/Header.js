import React from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo.svg';

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img
            src={logo}
            alt="Logo"
            style={{width: 'minmax(50px, 10vw)', maxHeight: '50px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll>
            <Nav.Link onClick={() => navigate('/')}>Accueil</Nav.Link>
            <Nav.Link onClick={() => navigate('/')}>Liste</Nav.Link>
            <NavDropdown
              title="Ajouter une recette"
              id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate('/')}>
                Depuis un lien
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/add_recipe')}>
                Depuis une recette
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('/')}>
                Depuis une photo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate('/login')}>Connexion</Nav.Link>
            <Nav.Link onClick={() => navigate('/')}>Déconnexion</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
