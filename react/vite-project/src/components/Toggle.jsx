/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Toggle.css';

export default function Toggle() {
  const [state, setState] = useState(false);

  return (
    <div
      style={{ backgroundColor: state ? 'red' : 'green' }}
      onClick={() => {
        setState(!state);
      }}
    ></div>
  );
}
