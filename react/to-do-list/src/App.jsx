import { useState } from 'react';
import './App.css';
import Insert from './components/insert/Insert';
import TaskList from './components/list/TaskList';

function App() {
  const [taskArrayState, setTaskArrayState] = useState([]);
  function submitHandler(task) {
    setTaskArrayState((prevState) => [...prevState, task]);
  }
  return (
    <>
      <Insert submitHandler={submitHandler} />
      <TaskList taskArray={taskArrayState} />
    </>
  );
}

export default App;
