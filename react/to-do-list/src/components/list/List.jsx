import './List.css';

export default function List({ taskArray }) {
  return (
    <ul className='list-container'>
      {taskArray.map((task, index) => (
        <li className='task' key={index}>
          {task}
        </li>
      ))}
    </ul>
  );
}
