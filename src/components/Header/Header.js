import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Header;
