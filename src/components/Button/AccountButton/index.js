import React from 'react';
import "../../../styles/styles.scss";
import { BiUser } from 'react-icons/bi';

//src/assets/images/profile.png
const AccountButton = (props) => {

  return (
    <div
      className="button-login">
      <BiUser
        size={37.5} />
      <div className="button-login-title-contain">
        <span className="button-login-title">Đăng nhập / Đăng Ký</span>
        <span className="button-login-subtitle">Tài Khoản</span>
      </div>
    </div>
  )
}

export default AccountButton

