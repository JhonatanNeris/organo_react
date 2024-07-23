import React from 'react'

import './Input.css'

const Input = ({ placeholder, label, value, onChange, type = "text", obrigatorio = false }) => {

    const placeholderModificada = `${placeholder}...`

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Input