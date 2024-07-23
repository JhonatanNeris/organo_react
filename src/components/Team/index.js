import React from 'react'

//Import do CSS
import './Team.css'

//Components
import Collaborator from '../Collaborator'

//hex to rgba
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {
  return (
    (props.colabs.length > 0) && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.color, "0.5") }}>
      <input type="color" className='color-input' value={props.color} onChange={(e) => props.changeColor(e.target.value, props.id)}/>
      <h3 style={{ borderBottomColor: props.color }}>{props.name}</h3>
      <div className='colabs'>
        {props.colabs.map((colab, index) => {
          return <Collaborator key={index} collaborator={colab}  color={props.color} removeCollaborator={props.removeCollaborator}/>
        })}
      </div>
    </section>
  )
}

export default Team