import React from 'react'

//CSS
import './Collaborator.css'

//Icons
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Collaborator = ({ collaborator, color, removeCollaborator, favorite }) => {
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
        <div className='favorite'>
          {collaborator.favorite
            ? <IoIosHeart color='red' size={24} onClick={() => (favorite(collaborator.id))}/>
            : <IoIosHeartEmpty size={24} onClick={() => (favorite(collaborator.id))}/>
          }

        </div>
      </div>
    </div>
  )
}

export default Collaborator