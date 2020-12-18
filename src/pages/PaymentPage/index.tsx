import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Card from 'react-credit-cards'
import { useHttp } from '../../hooks/http.hook'
import { RouteParamsType } from '../../types'
import "react-credit-cards/es/styles-compiled.css";
import { Button, TextField } from '@material-ui/core'
import { baseUrl } from '../../routes'
import { AuthContext } from '../../context/auth'
import * as Yup from 'yup'
import { useFormik } from 'formik'

type cardDetails = {
    cvc: string,
    expiry: string,
    focused?: FocusedFildName,
    name: string,
    number: string,
}


const validationSchema = Yup.object({
  number: Yup.string().max(16).required("Required"),
  name: Yup.string().required("Required"),
  expiry: Yup.string().required("Required"),
  cvc: Yup.string().min(3).max(4).required("Required")
})


type FocusedFildName = "name" | "number" | "cvc" | "expiry" | undefined
const PaymentPage = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()
    const [focused, setFocused] = useState<FocusedFildName>()

    const {handleSubmit, errors, values, handleChange} = useFormik(
      {
        initialValues:{
          number: "",
          name: "",
          expiry: "",
          cvc: ""
        },
        validationSchema,
        onSubmit: async () =>  handlePayment(),
        validateOnChange: true
      }
    )

    const handlePayment = async () => {
        try{
            await request(`${baseUrl}/api/course/${course_id}/purchase`, 'POST')
            history.push(`/learn/${course_id}`)
        }catch(e){
            alert(e.message)
            history.push(`/home`)
        }
    }

    const handleWithFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e) 
      setFocused(e.target.name as FocusedFildName)
    }

    return(
        <div className="payment-container">
            <h3 className="section-title">Payment details</h3>
            <hr className="header--hr"/>
            <div className="payment--details">
            <Card
                    cvc={values.cvc}
                    expiry={values.expiry}
                    focused={focused}
                    name={values.name}
                    number={values.number}
                />
            <form className="payment-form" onSubmit={handleSubmit}>
                <TextField
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    required
                    onChange={handleWithFocus}
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              <TextField
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleWithFocus}
              />
            <TextField
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                required
                onChange={handleWithFocus}
            />
            <TextField
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                required
                onChange={handleWithFocus}
            />
            <Button variant="outlined" type="submit" >PAY</Button>
            </form>
                
            </div>
           
        </div>
        )
}

export default PaymentPage