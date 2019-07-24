import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
    <p>{props.id}</p>
      <button
        type='button'
        onClick={()=>props.handleDelete(props.id)}
      >
    Delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
