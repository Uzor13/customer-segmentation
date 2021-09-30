import React from 'react';
import Nav from "./Nav";
import {HeaderContainer} from "../style";

const Header = () => {
    return (
        <HeaderContainer>
            <h1 className='logo'>Customer Segmentation</h1>
            <Nav/>
        </HeaderContainer>
    );
};

export default Header;
