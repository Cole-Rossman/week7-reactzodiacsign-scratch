import React from 'react';
import './Sign.css';

export default function Sign({ sign }) {
  
  return (
    <div className='sign'>
      <img src={`${process.env.PUBLIC_URL}/signs/${sign.type}.png`} />
      <span className='name'>{sign.name}</span>
      <span className='dates'>{sign.dates}</span>

    </div>
  );
}
