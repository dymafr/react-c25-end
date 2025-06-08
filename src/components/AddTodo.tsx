import { useState, type ChangeEvent } from "react";
import { useTodoStore } from "../store";

function AddTodo() {
  const [content, setContent] = useState("");
  const addTodo = useTodoStore(({ addTodo }) => addTodo);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  function handleClick() {
    addTodo({
      content,
      done: false,
      edit: false,
    });
  }

  return (
    <div className="d-flex align-items-center mb-20">
      <input
        value={content}
        onChange={handleChange}
        type="text"
        className="flex-fill mr-15"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter une todo
      </button>
    </div>
  );
}

export default AddTodo;
