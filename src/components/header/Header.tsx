import React, {memo} from 'react';
import { HeaderContainer, Logo } from './Header.styles';
import logo from '../../assets/logo.svg';

export const Header: React.FC = memo(() => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Logo" />
        </HeaderContainer>
    );
});