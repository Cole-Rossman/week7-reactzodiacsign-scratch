import React from 'react';
import './Main.css';
import { signs } from '../../data.js';
import Sign from '../Sign/Sign';

export default function Main() {
  return <main className='main'>
    {signs.map((sign) => (
      <Sign key={sign.name} sign={sign} />
    ))};
  </main>;
}
