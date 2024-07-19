import React, { useState } from 'react'

import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.value} onChange={props.onChange} type="text" required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto