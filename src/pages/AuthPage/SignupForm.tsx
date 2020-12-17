import React, { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import Input from './Input'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const defaultForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
}

type FormInput = typeof defaultForm

const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required").min(7),
  lastname: Yup.string().required("Required"),
  confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
     'Passwords must match',
   ),
  firstname: Yup.string().required("Required"),
})


const SignupForm = () => {
    const {request} = useHttp()
    const {login} = useContext(AuthContext)

    const {handleSubmit, errors, values, handleChange} = useFormik(
      {
        initialValues:{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirm: ""
        },
        validationSchema,
        onSubmit: async (values) =>  handleSignup(values),
        validateOnChange: false
      }
    )

    const handleSignup = async (values: FormInput) => {
        try {
          const res = await request(`${baseUrl}/api/account/register`, 'POST', values)
          login(res.access_token, res.id, res.firstName, res.lastName, res.role);
        } catch (error) {
          alert(error);
        }
      }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1 className="title">Sign Up</h1>
            <Input name="firstname" value={values.firstname} onChange={handleChange} label="First name" error={errors.firstname}/>
            <Input name="lastname" value={values.lastname} onChange={handleChange} label="Last name" error={errors.lastname}/>
            <Input name="email" value={values.email} onChange={handleChange} label="Email" error={errors.email}/>
            <Input name="password" type="password" value={values.password} onChange={handleChange} label="Password" error={errors.password}/>
            <Input name="confirm" type="password" value={values.confirm} onChange={handleChange} label="Confirm Password" error={errors.confirm}/>
            <button className="submit-btn auth-submit" type="submit" >Sign up</button>
        </form>
    )
}

export default SignupForm