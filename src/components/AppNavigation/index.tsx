import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from '../UserMenu'

const AppNavigation = ({isAuthorized}:any) => {

    return(
            <nav className="app-nav">
                <NavLink to="/">       
                    <div className="logo-container logo">  </div> 
                </NavLink> 

                {isAuthorized?
                    <div>
                        <NavLink to="/auth/login" className="auth-link">Login</NavLink>
                        <NavLink to="/auth/signup" className="auth-link">Sign up</NavLink> 
                    </div>
                    :
                    <div className="dropdown">
                        User name
                        <UserMenu className="menu-list-dropdown hidden"/>
                    </div>
                }
            </nav>
    )
}


export default AppNavigation