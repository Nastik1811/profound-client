import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = ({className}: any) => {
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
                <button className="menu-link logout-btn">Log out</button>
            </li>
        </ul>
    </nav>
    )
}

export default UserMenu