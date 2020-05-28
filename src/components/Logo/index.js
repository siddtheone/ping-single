import React from 'react';
import LogoImg from '../../images/logo.svg';

export default function Logo() {
    return (
        <header>
            <img src={LogoImg} alt="Ping"/>
        </header>
    )
}