import React from "react";
import './TodoError.css';

function TodoError({error}) {
  return(
    <div className="TodoError">
      <p>mepa que hubo un error</p>
      <p>{error}</p>
    </div>
  )
}

export {TodoError};

