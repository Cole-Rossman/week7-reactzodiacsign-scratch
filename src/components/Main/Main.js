import React from 'react';
import './Main.css';
import { signs } from '../../data.js';
import Sign from '../Sign/Sign';
import background from '../../space.png';

export default function Main() {
  return <main className='main' style={{ backgroundImage: `url(${background})` }} >
    {signs.map((sign) => (
      <Sign key={sign.name} sign={sign} />
    ))};
  </main>;
}
