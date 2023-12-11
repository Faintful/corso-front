import { useState } from 'react';

export default function Insert({ submitHandler }) {
  const [textState, setTextState] = useState('');
  function changeHandler({ target: { value } }) {
    setTextState(value);
  }
  return (
    <>
      <input placeholder='task' type='text' onChange={changeHandler} />
      <button onClick={() => submitHandler(textState)}>
        Aggiungi una task
      </button>
    </>
  );
}
