export default function List({ taskArray }) {
  return (
    <div>
      {taskArray.map((task, index) => (
        <div key={index}>
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}
