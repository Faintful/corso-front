import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');
  function submitHandler(state) {
    setState(state);
  }
  return <></>;
}

export default App;
