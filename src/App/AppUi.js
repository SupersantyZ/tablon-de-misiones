import { TodoCounter } from '../TodoCounter';
import { TodoSerch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/item';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmplyTodos } from '../emptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../modal';
import { TodoForm } from '../modal/TodoForm';


function AppUi() {

  const {
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    unCompleteTodo,
    setOpenModal
    } = React.useContext(TodoContext);
return(
<>  
<TodoCounter/>
<TodoSerch/>


    <TodoList>
      {loading && <TodoLoading />}
      {error && <TodoError error={error} />}
      {!loading && !searchedTodos.length && <EmplyTodos />}

      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onDelete={() => deleteTodo(todo.text)}
        onComplete={() => completeTodo(todo.text)}
        onUnComplete={() => unCompleteTodo(todo.text)}
        />
      ))}
    </TodoList>


<CreateTodoButton
  openModal={openModal}
  setOpenModal={setOpenModal}
/>

  {openModal && (
    <Modal>
      {<TodoForm />}
    </Modal>
  )}
</>
)
}

export { AppUi };