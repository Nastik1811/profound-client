import React, { FormEvent, useState } from 'react'
import Input from './Input'

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        setUsername("")
        setPassword("")
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