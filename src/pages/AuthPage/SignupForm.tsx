import React, { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import Input from './Input'

const defaultForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
}

type FormInput = typeof defaultForm

const SignupForm = () => {
    const [form, setForm] = useState<FormInput>(defaultForm)
    const {request} = useHttp()
    const {login} = useContext(AuthContext)

    const handleSignup = async (event: FormEvent) => {
        event.preventDefault();
        try {
          const res = await request(`${baseUrl}/api/account/register`, 'POST', form)
          login(res.access_token, res.id, res.firstName, res.lastName);
        } catch (error) {
          alert(error);
        }
      }

    return(
        <form className="auth-form" onSubmit={handleSignup}>
            <h1 className="title">Sign Up</h1>
            <Input value={form.firstname} onChange={(firstname: string) => setForm(data => ({...data, firstname}))} label="First name"/>
            <Input value={form.lastname} onChange={(lastname: string) => setForm(data => ({...data, lastname}))} label="Last name"/>
            <Input value={form.email} onChange={(email: string) => setForm(data => ({...data, email}))} label="Email"/>
            <Input type="password" value={form.password} onChange={(password: string) => setForm(data => ({...data, password}))} label="Password"/>
            <Input type="password" value={form.confirm} onChange={(confirm: string) => setForm(data => ({...data, confirm}))} label="Confirm Password"/>
            <button className="submit-btn auth-submit" type="submit" >Sign up</button>
        </form>
    )
}

export default SignupForm