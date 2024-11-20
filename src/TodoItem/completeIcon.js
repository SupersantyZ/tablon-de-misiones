import React from "react";
import { TodoIcon } from "./todoIcon";
function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      onClick={onComplete}
      type="check"
      color={completed ? "lightgreen" : "gray"}
    />
  );
}

export { CompleteIcon };