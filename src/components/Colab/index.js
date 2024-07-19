import React from 'react'

//CSS
import './Colab.css'

const Colab = ({name, image, post}) => {
  return (
    <div className='colab'>
      <div className='header'>
        <img src={image} alt={name} />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{post}</h5>
      </div>
    </div>
  )
}

export default Colab