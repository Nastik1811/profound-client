import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Card from 'react-credit-cards'
import { useHttp } from '../../hooks/http.hook'
import { RouteParamsType } from '../../types'
import "react-credit-cards/es/styles-compiled.css";
import { Button, TextField } from '@material-ui/core'
import { baseUrl } from '../../routes'
import { AuthContext } from '../../context/auth'

type cardDetails = {
    cvc: string,
    expiry: string,
    focused?: FocusedFildName,
    name: string,
    number: string,
}

const cardDetailsDefault = {
    number: "",
    name: "",
    expiry: "",
    cvc: ""
}

type FocusedFildName = "name" | "number" | "cvc" | "expiry" | undefined
const PaymentPage = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()
    const [details, setDetails] = useState<cardDetails>(cardDetailsDefault)

    const handlePayment = async () => {
        try{
            await request(`${baseUrl}/api/course/${course_id}/purchase`, 'POST')
            history.push(`/learn/${course_id}`)
        }catch(e){
            alert(e.message)
            history.push(`/home`)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        if (target.name === "number") {
          //target.value = formatCardNumber(target.value);
        } else if (target.name === "expiry") {
          //target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
          //target.value = formatCVC(target.value);
        }
    
        setDetails(d => ({ ...d, [target.name]: target.value, focused: target.name as FocusedFildName }));
      };

    return(
        <div className="payment-container">
            <h3 className="section-title">Payment details</h3>
            <hr className="header--hr"/>
            <div className="payment--details">
            <Card
                    cvc={details.cvc}
                    expiry={details.expiry}
                    focused={details.focused}
                    name={details.name}
                    number={details.number}
                />
            <form className="payment-form">
                <TextField
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    inputProps={{pattern: "[\d| ]{16,22}"}}
                    required
                    onChange={handleInputChange}
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              <TextField
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
              />
            <TextField
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                inputProps={{pattern:"\d\d/\d\d"}}
                required
                onChange={handleInputChange}
            />
            <TextField
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                inputProps={{pattern:"\d{3,4}"}}
                required
                onChange={handleInputChange}
            />
            <Button variant="outlined" onClick={handlePayment} >PAY</Button>
            </form>
                
            </div>
           
        </div>
        )
}

export default PaymentPage