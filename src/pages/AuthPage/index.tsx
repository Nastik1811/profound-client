import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const AuthPage = () => {
    
    return(
            <div className="auth-container">
                <div className="img-container">
                </div>
                <Switch>
                    <Route path="/auth/login" children={<LoginForm/>}/>
                    <Route path="/auth/signup" children={<SignupForm/>}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
    )
}

export default AuthPage