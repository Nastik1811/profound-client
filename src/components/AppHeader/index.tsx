import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from '../UserMenu'

const AppHeader = () => {
    return(
        <header className="app-header">
            <nav className="app-nav">
            <NavLink to="/">       
                <div className="logo-container logo">  </div> 
            </NavLink> 
            <div className="search-container"></div>
            {/* <NavLink to="/auth/login" className="auth-link">Login</NavLink>
            <NavLink to="/auth/signup" className="auth-link">Sign up</NavLink> */}
            <div className="dropdown">
                User name
                <UserMenu className="menu-list-dropdown"/>
            </div>
            </nav>
        </header>
    )
}


export default AppHeader