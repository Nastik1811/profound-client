import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

const UserMenu = ({className}: any) => {
    const {logout} = useContext(AuthContext)
    return(
    <nav>
        <ul className={className}>
            <li>
                <NavLink 
                    className="menu-link" 
                    activeClassName="menu-link active" 
                    to="/home/in_progress">
                        My courses
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className="menu-link" 
                    activeClassName="menu-link active" 
                    to="/home/own_courses">
                        Created courses
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className="menu-link" 
                    activeClassName="menu-link active" 
                    to="/home/achivements">
                        My Achievements
                </NavLink>
            </li>
            <li>
                <button className="menu-link logout-btn" onClick={logout}>Log out</button>
            </li>
        </ul>
    </nav>
    )
}

export default UserMenu