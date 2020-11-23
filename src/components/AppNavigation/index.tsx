import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from '../UserMenu'

const AppNavigation = ({isAuthorized}:any) => {

    return(
            <nav className="app-nav">
                <NavLink to="/">       
                    <div className="logo-container logo">  </div> 
                </NavLink> 
                {/* <NavLink to="/auth/login" className="auth-link">Login</NavLink>
                <NavLink to="/auth/signup" className="auth-link">Sign up</NavLink> */}
                <div className="dropdown">
                    User name
                    <UserMenu className="menu-list-dropdown"/>
                </div>
            </nav>
    )
    if(isAuthorized){
        return(
            <div className="app-nav dropdown">
                <span>User name</span>
                <UserMenu className="menu-list-dropdown"/>
            </div> 
        )
    }
    return(
            <div className="app-nav">
                <NavLink to="/auth/login" className="auth-link">Log In</NavLink>
                <NavLink to="/auth/signup" className="auth-link">Sign Up</NavLink>
            </div>    
    )
}


export default AppNavigation