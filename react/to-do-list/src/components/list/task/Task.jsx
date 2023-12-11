export default function Task({ task, key }) {
  return (
    <li className='task' key={key}>
      {task}
    </li>
  );
}
