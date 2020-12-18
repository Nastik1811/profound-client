import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import DropdownMenu from '../DropdownMenu'
import UserMenu from '../UserMenu'

const AppNavigation = () => {
    const {isAuthenticated, firstname, role, logout} = useContext(AuthContext)
    
    return(
            <nav className="app-nav">
                <NavLink to="/">       
                    <div className="logo-container logo">  </div> 
                </NavLink> 

                {
                    role === "admin" ? 
                        <div className="actions-container">
                            <NavLink to="/" className="auth-link" onClick={logout}>Logout</NavLink>
                        </div> 
                        : isAuthenticated ?
                        <DropdownMenu title={firstname || ""}>
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