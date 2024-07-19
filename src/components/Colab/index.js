import React from 'react'

//CSS
import './Colab.css'

const Colab = ({name, image, post, colorPrimary}) => {
  return (
    <div className='colab'>
      <div className='header' style={{ backgroundColor: colorPrimary }}>
        <img src={image} alt={name} />
      </div>
      <div className='card-footer'>
        <h4>{name}</h4>
        <h5>{post}</h5>
      </div>
    </div>
  )
}

export default Colab