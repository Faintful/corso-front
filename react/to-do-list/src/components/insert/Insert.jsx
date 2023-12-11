import { useState } from 'react';
import './Insert.css';

export default function Insert({ submitHandler }) {
  const [textState, setTextState] = useState('');
  function changeHandler({ target: { value } }) {
    setTextState(value);
  }
  return (
    <div className='insert-container'>
      <input placeholder='task' type='text' onChange={changeHandler} />
      <div className='button' onClick={() => submitHandler(textState)}>
        Aggiungi una task
      </div>
    </div>
  );
}
