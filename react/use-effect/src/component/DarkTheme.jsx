import { useEffect, useState } from 'react';

export default function DarkTheme() {
  const [darkState, setDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'true') {
      setDark(true);
    } else if (theme === 'false') {
      setDark(false);
    }
  }, []);
  return (
    <div>
      <div
        style={
          darkState === false
            ? { backgroundColor: 'white' }
            : { backgroundColor: 'black' }
        }
      >
        Esempio
      </div>
      <button
        onClick={() => {
          setDark(!darkState);
          localStorage.setItem('theme', !darkState);
        }}
      >
        Cambia Tema
      </button>
    </div>
  );
}
