import React from 'react';
import BaseHeader from "../BaseHeader";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

class DefaultHeader extends React.Component {
  render() {
    return (
      <BaseHeader>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/restaurant">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </BaseHeader>
    );
  }
}

export default DefaultHeader;
