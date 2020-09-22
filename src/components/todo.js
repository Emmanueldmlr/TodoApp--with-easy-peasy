import React from 'react'
import {useStoreActions} from 'easy-peasy'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Todo(props) {
    const { toggle, deleteTodo } = useStoreActions((Actions) => ({
      toggle: Actions.toggle,
      deleteTodo: Actions.deleteTodo
    }));
   const todo = props.todo
    return (
      <div key={todo.id}>
        <li className={todo.completed ? "checked" : null}>
          <div onClick={() => toggle(todo.id)}> # {todo.title}</div>
          <FontAwesomeIcon
            onClick={()=>deleteTodo(todo.id)}
            style={{ color: "red", marginTop: "-20px", }}
            className="float-right"
            icon={faTrash}
          />
        </li>
      </div>
    );
}
export default Todo
