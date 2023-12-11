/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default function Text() {
  const [textState, setTextState] = useState('');
  return (
    <div
      style={{ backgroundColor: 'red' }}
      onClick={() => {
        textState === '' ? setTextState('Carlo') : setTextState('');
      }}
    >
      {textState}
    </div>
  );
}
