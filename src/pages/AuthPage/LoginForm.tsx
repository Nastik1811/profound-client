import React, { FormEvent, useState } from 'react'
import { useAuth0 } from '../../context/auth'
import Input from './Input'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {changeAuthState} = useAuth0()

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        setUsername("")
        setPassword("")
        changeAuthState(true)
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