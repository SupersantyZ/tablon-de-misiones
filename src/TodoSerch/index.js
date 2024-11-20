import React from 'react';
import './TodoSerch.css';
import { TodoContext } from '../TodoContext';

function TodoSerch() {

  const {
    seachValue,
    setSeachValue
  } = React.useContext(TodoContext);
 
  
  return (
    <div className="input-box">
    <input 
    value={seachValue}
    placeholder="Buscar Mision"
    onChange={
      (evento) => setSeachValue(evento.target.value)
    } 
    />
    </div>
  );
}

export { TodoSerch };