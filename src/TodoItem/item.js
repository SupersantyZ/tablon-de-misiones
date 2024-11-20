import "./TodoItem.css";
import React from "react";
import { CompleteIcon } from "./completeIcon";
import { DeleteIcon } from "./deleteIcon";



function TodoItem(props) {


  return (
    <li>
        
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.completed === true ? props.onUnComplete : props.onComplete}
      />
        
      <p className={`todo-text ${props.completed &&  "todo-text-checked"}`}>{props.text}</p>
      
      <DeleteIcon
        onDelete={props.onDelete}
      />
      
    </li>
  );
}

export { TodoItem };
