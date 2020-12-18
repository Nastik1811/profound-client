import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import ConstructorPage from './pages/ModuleConstructorPage'
import CourseOverview from './pages/CourseOverview'
import CreateCourseModal from './pages/CreateCourseModal'
import DiscoverPage from './pages/DiscoverPage'
import HomePage from './pages/HomePage'
import LearningPage from './pages/LearningPage'
import PageNotFound from './pages/PageNotFound'
import PaymentPage from './pages/PaymentPage'
import AdminPage from './pages/AdminPage'
import AdminOverview from './pages/AdminPage/AdminOverview'

export const baseUrl = "https://profound-web-app.azurewebsites.net"

const useRoutes = (isAuthenticated:boolean, role: "admin" | "user" | null ) => {
        if(role === "admin"){
            return(
            <Switch>
                <Route path="/admin/overview/:course_id" component={AdminOverview}/>
                <Route path="/admin" component={AdminPage}/> 
                <Route path="/overview/:course_id" component={CourseOverview}/> 
                <Route path="/home" component={HomePage}/>
                <Redirect to="/admin"/>
            </Switch>)
        }
        if(isAuthenticated){ 
        return(
            <Switch>
                <Route exact path="/" component={DiscoverPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/learn/:course_id" component={LearningPage}/>
                <Route path="/create">
                    <CreateCourseModal/>   
                </Route> 
                <Route path="/overview/:course_id/constructor/:module_id?" component={ConstructorPage}/>
                <Route path="/overview/:course_id" component={CourseOverview}/> 
                <Route path="/payment/:course_id" component={PaymentPage}/> 
                <Redirect path="/auth" to="/"/>
                <Route component={PageNotFound}/>
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