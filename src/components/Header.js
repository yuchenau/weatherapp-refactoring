import React from 'react';
import logo from '../icons/logo.png';

export default function Header(props) {
    return (
        <header>
            <img className="header__logo" src={logo} style={{ width: 55 }} alt="logo" />
            <h1 className="header__title" style={{ fontSize:30 }}>Weather Channel</h1>
        </header>
    );
}
