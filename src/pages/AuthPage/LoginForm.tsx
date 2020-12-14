import React, { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import Input from './Input'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        setUsername("")
        setPassword("")
        login("", "","" )
    }

    return(
        <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="title">Login</h1>
            <Input value={username} onChange={setUsername} label="Username"/>
            <Input type="password" value={password} onChange={setPassword} label="Password"/>
            <button className="submit-btn auth-submit" type="submit" >Log In</button>
        </form>
    )
}

export default LoginForm