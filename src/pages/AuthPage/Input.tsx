import React from 'react'

const Input = ({value, onChange, label, type}: any) => {
    return(
        <label > 
            <input type={type} value={value} onChange={e => onChange(e.target.value)} className="input" placeholder={label}/>
        </label>
    )
}
export default Input