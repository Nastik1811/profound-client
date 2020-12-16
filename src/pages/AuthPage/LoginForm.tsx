import React, { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import Input from './Input'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {request} = useHttp()
    const {login} = useContext(AuthContext)


    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        try {
          const res = await request(`${baseUrl}/api/account/token`, 'POST', {email, password})
          console.log(res)
          login(res.access_token, res.id, res.firstName, res.lastName);
        } catch (error) {
          alert(error);
        }
      }

    return(
        <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="title">Login</h1>
            <Input value={email} onChange={setEmail} label="Email"/>
            <Input type="password" value={password} onChange={setPassword} label="Password"/>
            <button className="submit-btn auth-submit" type="submit" >Log In</button>
        </form>
    )
}

export default LoginForm