import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


const BaseHeader = (props) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="NFood Logo"
            src="https://lelogama.go-jek.com/service_icon_text/gojek-logo_normal.svg" />
        </Navbar.Brand>
        {props.children}
      </Container>
    </Navbar>
  )
}

export default BaseHeader
