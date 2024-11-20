import React from "react";

import { TodoIcon } from "./todoIcon";
function DeleteIcon( { onDelete }) {
  return (
    <TodoIcon
      onClick={onDelete}
      type="delete"
      color="gray"
    />
  );
}

export { DeleteIcon };