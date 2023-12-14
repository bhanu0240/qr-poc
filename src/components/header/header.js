import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./header.scss"

function Header() {
    return (
        <>
            <header className='header-container'>
                <Link to="/react-zxing">React Zxing</Link>
                <Link to="/scanbot">Scanbot </Link>

            </header>
            <Outlet />
        </>
    )
}

export default Header;