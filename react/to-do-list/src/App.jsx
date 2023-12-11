import { useState } from 'react';
import './App.css';
import Insert from './components/insert/Insert';
import List from './components/list/List';

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
