import { useState } from 'react';
import './App.css';
import Insert from './components/insert/Insert';

function App() {
  const [taskArrayState, setTaskArrayState] = useState([]);
  function submitHandler(task) {
    setTaskArrayState((prevState) => [...prevState, task]);
  }
  return (
    <>
      <Insert submitHandler={submitHandler} />
      <List taskArray={taskArrayState} />
    </>
  );
}

export default App;
