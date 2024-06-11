import React from 'react';
import { HeaderContainer, Logo } from './Header.styles';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Logo" />
        </HeaderContainer>
    );
};

export default Header;