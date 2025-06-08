import { useState, type ChangeEvent } from "react";
import type { Todo } from "../interfaces";
import { useTodoStore } from "../store";

function TodoItem({ todo }: { todo: Todo }) {
  const [inputValue, setInputValue] = useState(todo.content);

  const deleteTodo = useTodoStore(({ deleteTodo }) => deleteTodo);
  const updateTodo = useTodoStore(({ updateTodo }) => updateTodo);

  function handleValidation(editedTodo: Todo) {
    updateTodo(editedTodo);
  }
  function handleDelete() {
    deleteTodo(todo._id);
  }

  return (
    <li className="d-flex align-items-center mb-20">
      {todo.edit ? (
        <>
          <input
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            type="text"
            className="flex-fill mr-15"
          />
          <button
            onClick={() => handleValidation({ ...todo, edit: false })}
            className="btn btn-reverse-primary mr-15"
          >
            Annuler
          </button>
          <button
            onClick={() =>
              handleValidation({ ...todo, edit: false, content: inputValue })
            }
            className="btn btn-primary"
          >
            Sauvegarder
          </button>
        </>
      ) : (
        <>
          <span
            className="flex-fill mr-15"
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.content}
          </span>
          <button
            onClick={() => handleValidation({ ...todo, done: !todo.done })}
            className={`btn mr-15 ${
              todo.done ? "btn-reverse-primary" : "btn-primary"
            } `}
          >
            {todo.done ? "Annuler" : "Valider"}
          </button>
          <button onClick={handleDelete} className="btn btn-danger mr-15">
            Supprimer
          </button>
          <button
            onClick={() => handleValidation({ ...todo, edit: true })}
            className="btn btn-reverse-primary"
          >
            Modifier
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
