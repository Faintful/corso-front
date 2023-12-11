import './TaskList.css';
import Task from './task/Task';

export default function TaskList({ taskArray }) {
  return (
    <ul className='list-container'>
      {taskArray.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
}
