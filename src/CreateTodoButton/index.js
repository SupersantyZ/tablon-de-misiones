import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton({
    createValue,
    setCreateValue,
    addTodo,
    setOpenModal,
    openModal
  }) {
  return (

    <div>
    <button className="createTodoButton" 
    onClick={() => setOpenModal(!openModal) } >
      +
    </button>
    {/* <div className="creationBox hidden">
      <div className="creationBox-content">
        <div>Crear Mision</div>
        <input
        value={createValue}
        type="text" 
        placeholder="Que hay que hacer?"
        onChange={
          (evento) => setCreateValue(evento.target.value)
          && console.log(createValue)
        } 
        />

        <button 
        onClick={() => addTodo = true}
        className="btn-creation">Crear</button>
      </div>
    </div> */}
    </div>
  );
}

export { CreateTodoButton };