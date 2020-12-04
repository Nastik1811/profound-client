import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '../../context/auth'
import DropdownMenu from '../DropdownMenu'
import UserMenu from '../UserMenu'

const AppNavigation = () => {
    const {isAuthenticated} = useAuth0()
    
    return(
            <nav className="app-nav">
                <NavLink to="/">       
                    <div className="logo-container logo">  </div> 
                </NavLink> 

                {isAuthenticated?
                    <DropdownMenu title="User name">
                        <UserMenu className="menu-list-dropdown"/>
                    </DropdownMenu>
                    :
                    <div className="actions-container">
                        <NavLink to="/auth/login" className="auth-link" >Login</NavLink>
                        <NavLink to="/auth/signup" className="auth-link">Sign up</NavLink> 
                    </div>
                }
            </nav>
    )
}


export default AppNavigation