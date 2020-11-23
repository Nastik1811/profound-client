import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from '../UserMenu'

const AppNavigation = ({isAuthorized}:any) => {
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