import React from 'react'

//CSS
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  console.log(props.itens)

  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select onChange={props.onChange} required={props.required} value={props.value}>
        {props.itens.map((item, index) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa