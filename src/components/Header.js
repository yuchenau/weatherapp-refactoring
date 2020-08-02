import React from 'react';
import logo from '../icons/logo.png';

export default function Header(props) {
    return (
        <header>
            <img className="header__logo" src={logo} alt="logo" />
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}
