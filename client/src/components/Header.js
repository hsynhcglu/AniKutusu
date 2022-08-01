import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { FcEditImage } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Anı Kutusu</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/create">
                <Nav.Link>
                  <Button variant="outline-info">
                    {" "}
                    <FcEditImage size={20} /> Bir Anı Paylaş
                  </Button>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/auth">
                <Nav.Link>
                  <Button variant="outline-light"><AiOutlineLogin size={20} /> Giriş Yap</Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
