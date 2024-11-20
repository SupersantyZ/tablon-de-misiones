import react from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos , totalTodos } = react.useContext(TodoContext);
  return (
    <h1>Has completado {completedTodos} de {totalTodos} Misiones</h1>
  );
}

export { TodoCounter };