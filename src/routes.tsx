import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import ConstructorPage from './pages/ConstructorPage'
import CourseOverview from './pages/CourseOverview'
import DiscoverPage from './pages/DiscoverPage'
import HomePage from './pages/HomePage'
import LearningPage from './pages/LearningPage'

const useRoutes = (isAuthenticated:boolean) => {
    if(isAuthenticated){ 
        return(
            <Switch>
                <Route exact path="/" component={DiscoverPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/constructor" component={ConstructorPage}/>
                <Route path="/learn" component={LearningPage}/>
                <Route path="/overview/:course_id" component={CourseOverview}/>
                <Redirect to="/" />
            </Switch>
        )}
        return(
            <Switch>
                <Route exact path="/" component={DiscoverPage}/>
                <Route path="/overview/:course_id" component={CourseOverview}/>
                <Route path="/auth" component={AuthPage}/>
                <Redirect to="/auth"/>
            </Switch>
        )
} 

export default useRoutes