/* eslint-disable */

import './Utente.css';

export default function Utente(props) {
  return (
    <div className='mainContainer'>
      <div className='container'>
        <h1>Stipendio:</h1>
        <p>{props.utente.stipendio}</p>
      </div>
      <div className='container'>
        <h1>Ruolo:</h1>
        <p>{props.utente.ruolo}</p>
      </div>
      <div className='container'>
        <h1>Azienda:</h1>
        <p>{props.utente.azienda}</p>
      </div>
    </div>
  );
}
