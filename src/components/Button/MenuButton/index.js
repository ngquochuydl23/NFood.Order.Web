import React from 'react';
import "../../../styles/styles.scss";
import { AiOutlineMenu } from 'react-icons/ai';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <AiOutlineMenu
        size={30} />
      <div className="button-login-title-contain">
        <span className="button-login-title">Danh mục</span>
        <span className="button-login-subtitle">Sản phẩm</span>
      </div>
    </div>
  )
}

export default MenuButton