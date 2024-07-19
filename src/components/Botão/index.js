import React from 'react'

//Import do css
import './Botao.css'

const Botao = (props) => {
  return (
    <button className='button'>{props.children}</button>
  )
}

export default Botao