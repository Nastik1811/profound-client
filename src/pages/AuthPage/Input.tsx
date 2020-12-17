import clsx from 'clsx'
import React from 'react'

const Input = ({value, onChange, label, type, name, error}: any) => {
    return(
        <label className="input-label"> 
            {error && <span className="error-message">{error}</span>}
            <input 
                name={name} 
                type={type} 
                value={value} 
                onChange={e => onChange(e)} 
                placeholder={label}
                className={clsx("input", {"error": error})}
                />
        </label>
    )
}
export default Input