import React from 'react';
import AccountButton from '../../Button/AccountButton/index';
import CartButton from "../../Button/CartButton/index";
import MenuButton from '../../Button/MenuButton';
import { ThemeContext } from "../../../App.js";
import { Nav } from 'react-bootstrap';

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      openAuthDialog: false
    }
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default Header;
