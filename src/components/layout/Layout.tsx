import React, {memo, ReactNode} from 'react';
import {
    LayoutContainer,
    Gamepad,
    IconButtonX,
    IconButtonYFirst,
    IconButtonYSecond,
    IconButtonSquare, IconButtonO
} from './Layout.styles';
import iconX from '../../assets/buttonX.svg';
import iconY from '../../assets/buttonY.svg';
import iconSquare from '../../assets/buttonSquare.svg';
import iconO from '../../assets/buttonO.svg';
import gamepad from '../../assets/gamepad.svg';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = memo(({ children }) => {
    return (
        <LayoutContainer>
            <IconButtonX src={iconX} alt="IconX" />
            <IconButtonYFirst src={iconY} alt="IconYFirst" />
            <IconButtonYSecond src={iconY} alt="IconYSecond"/>
            <IconButtonSquare src={iconSquare} alt="IconSquare"/>
            <IconButtonO src={iconO} alt="IconO"/>
            <Gamepad src={gamepad} alt="Gamepad" />
            {children}
        </LayoutContainer>
    );
});