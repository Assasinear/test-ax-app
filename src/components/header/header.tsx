import { FC, memo } from 'react';
import { HeaderContainer, Logo } from './header.styles';
import logo from '../../assets/logo.svg';

export const Header: FC = memo(() => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Logo" />
        </HeaderContainer>
    );
});