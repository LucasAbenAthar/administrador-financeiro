import React from 'react';
import { Link } from 'react-router-dom';
import "../Popup/popup.css";

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <p className='popup-text'><i class='popup-icon bi bi-exclamation-triangle'></i>Tem Certeza ?</p>
        <div className='bnt-center'>
          <button className='ficar' onClick={() => props.setTrigger(false)}><Link to="/Dashboard">Não</Link></button>
          <button className='voltar'><Link to="/">Sim</Link></button>
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup;