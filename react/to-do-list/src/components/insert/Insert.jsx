import { useState } from 'react';

export default function Insert({ submitHandler }) {
  const [textState, setTextState] = useState('');
  function changeHandler(event) {
    setTextState((prevState) => {
      prevState.toString + event.target.value;
    });
  }
  return (
    <>
      <input type='text' onChange={changeHandler} />
      <button onClick={submitHandler(textState)}>Aggiungi una task</button>
    </>
  );
}
