import React from 'react';
import {Link} from 'react-router-dom'
import {NavBar, NavList} from "../style";

const Nav = () => {
    return (
        <NavBar>
            <NavList>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/data' className='nav-link'>Data</Link>
                <Link to='/chart' className='nav-link'>Chart</Link>
            </NavList>
        </NavBar>
    );
};

export default Nav;
