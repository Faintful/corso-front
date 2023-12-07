/* eslint-disable */

import './App.css'
import Utente from './components/Utente'

const obj1 = {
  stipendio: '20k',
  ruolo: 'Frontend dev',
  azienda: 'Azienda A'
}

const obj2 = {
  stipendio: '30k',
  ruolo: 'Backend dev',
  azienda: 'Azienda B'
}

const obj3 = {
  stipendio: '40k',
  ruolo: 'Fullstack Dev',
  azienda: 'Azienda C'
}

function App() {
  return (
    <>
      <Utente utente={obj1}/>
      <Utente utente={obj2}/>
      <Utente utente={obj3}/>
    </>
  )
}

export default App
