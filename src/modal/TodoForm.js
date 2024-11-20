import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
import { useEffect } from "react";
function TodoForm() {
  const {setOpenModal , openModal, addTodo} = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(!openModal);
    addTodo(newTodoValue);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onCancel(); // Llama a tu función
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onCancel]); // Dependencia para asegurarse de que usa la última versión de onCancel

 
  return (
    <div className="creationBox visible">
      <form 
        className="creationBox-content"
        onSubmit={onSubmit}
      >
      <div className="creationBox-content">
        <div>Crear Mision</div>
        <input
        onSubmit={onSubmit}
        onChange={onChange}
        type="text" 
        placeholder="Que hay que hacer?" 
        />

        <button 
        onClick={onSubmit}
        type="submit"
        className="btn-creation">Crear</button>
        <button 
        type="button"
        onClick={onCancel}
        className="btn-cancel">Cancelar</button>
      </div>
      </form>
    </div>
  );
}

export { TodoForm };
