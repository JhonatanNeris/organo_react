import React from 'react'

//CSS
import './Collaborator.css'

//Icons
import { IoIosCloseCircle } from "react-icons/io";

const Collaborator = ({ collaborator, color, removeCollaborator }) => {
  return (
    <div className='collaborator'>
      <IoIosCloseCircle
        size={28}
        className='delete-button'
        onClick={() => removeCollaborator(collaborator.id)}
      />
      <div className='header' style={{ backgroundColor: color }}>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <div className='card-footer'>
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.post}</h5>
      </div>
    </div>
  )
}

export default Collaborator