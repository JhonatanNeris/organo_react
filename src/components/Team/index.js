import React from 'react'

//Import do CSS
import './Team.css'

//Components
import Colab from '../Colab'

const Team = (props) => {
  return (
    (props.colabs.length > 0) && <section className='team' style={{ backgroundColor: props.colorSecondary }}>
      <h3 style={{ borderBottomColor: props.colorPrimary }}>{props.name}</h3>
      <div className='colabs'>
        {props.colabs.map((colab) => <Colab name={colab.name} post={colab.post} image={colab.image} />)}
      </div>
    </section>
  )
}

export default Team