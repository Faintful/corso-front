import { useState } from 'react';
import './App.css';
import Insert from './components/insert/Insert';

function App() {
  const [state, setState] = useState('');
  function submitHandler(state) {
    setState(state);
  }
  return (
    <>
      <Insert submitHandler={submitHandler} />
      <List task={state} />
    </>
  );
}

export default App;
