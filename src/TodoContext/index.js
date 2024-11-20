import React from "react";
import { useLocalStorage } from "./useLocalStorage";
 
const TodoContext = React.createContext();

function TodoProvider({children}) {

    
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []); 
  const  [seachValue, setSeachValue ] = React.useState(''); 
  const [openModal, setOpenModal] = React.useState(false);
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const  addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  }

  const searchedTodos = todos.filter(
    todo => {
    const todoText = todo.text.toLowerCase();
    const serchText = seachValue.toLowerCase();
    return todoText.includes(serchText);
  })

  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todosIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todosIndex, 1);
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todosIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todosIndex].completed = true;
    saveTodos(newTodos);
  }

  

  const unCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todosIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todosIndex].completed = false;
    
    saveTodos(newTodos);
  }

  return (
  <TodoContext.Provider value={{
    addTodo,
    loading, 
    error, 
    totalTodos, 
    completedTodos, 
    seachValue, 
    setSeachValue,
    deleteTodo, 
    completeTodo, 
    unCompleteTodo,
    searchedTodos,
    openModal, 
    setOpenModal
    }}>
    {children}
  </TodoContext.Provider>
  )
}



export { TodoContext, TodoProvider };