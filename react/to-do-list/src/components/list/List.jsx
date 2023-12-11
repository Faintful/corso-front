import { useState } from 'react';

export default function List({ task }) {
  const [listState, setListState] = useState([]);
  setListState((prevState) => [...prevState, task]);
  return <div>{listState}</div>;
}
