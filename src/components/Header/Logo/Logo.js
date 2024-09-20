import React from 'react';
import './Logo.scss';
import logo from '../../../assests/images/logo.svg'; // Cập nhật đường dẫn logo nếu cần

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
