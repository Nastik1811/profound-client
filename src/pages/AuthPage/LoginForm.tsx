import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import Input from './Input'
import * as Yup from 'yup'

type LoginData = {
  email: string,
  password: string
}

type LoginErrors = {
  email?: string,
  password?: string
}

const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})

const LoginForm = () => {
  const {request} = useHttp()
  const {login} = useContext(AuthContext)

  const {handleSubmit, errors, values, handleChange} = useFormik(
    {
      initialValues:{
        email: "",
        password: ""
      },
      validationSchema,
      validateOnChange: false,
      onSubmit: async (values) =>  handleLogin(values)
    }
  )

  const handleLogin = async (values: LoginData) => {
      try {
        const res = await request(`${baseUrl}/api/account/token`, 'POST', values)
        console.log(res)
        login(res.access_token, res.id, res.firstName, res.lastName, res.role);
      } catch (error) {
        alert(error);
      }
    }

  return(
      <form className="auth-form" onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <Input 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            label="Email"
            error={errors.email}
            />
          <Input 
            name="password" 
            type="password" 
            value={values.password} 
            onChange={handleChange} 
            label="Password"
            error={errors.password}
            />
          <button className="submit-btn auth-submit" type="submit" >Log In</button>
      </form>
  )
}

export default LoginForm