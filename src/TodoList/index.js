
import './TodoList.css';

function TodoList(props) {
  return (
    <div className = "todo-list-counter">
    <ul>
      {props.children}
    </ul>
    </div>
  );
}

export { TodoList };