import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import CurrentCourses from './CurrentCourses'
import Achievements from './Achievements'
import CreatedCourses from './CreatedCourses'
import UserMenu from '../../components/UserMenu'



const HomePage = () => {
    return(
    <div className="content ">
    <div className="home">
        <div className="user-menu">
            <div className="user-img"></div>
            <UserMenu className="menu-list"/>
        </div>
        <Switch>
            <Route path="/home/in_progress" children={<CurrentCourses/>}/>
            <Route path="/home/own_courses" children={<CreatedCourses/>}/>
            <Route path="/home/achivements" children={<Achievements/>} />   
            <Redirect to="/home/in_progress"/>
        </Switch>
        
    </div>
    </div>
    )
}

export default HomePage