import { useTodoStore } from "../store";
import TodoItem from "./TodoItem";

function TodoList() {
  const loading = useTodoStore(({ loading }) => loading);
  const filter = useTodoStore(({ filter }) => filter);
  const todos = useTodoStore(({ todos }) => todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "close") return todo.done;
    if (filter === "open") return !todo.done;
    return false;
  });
  return loading ? (
    <small>Chargement en cours ...</small>
  ) : (
    <ul>
      {filteredTodos.map((t) => (
        <TodoItem key={t._id} todo={t} />
      ))}
    </ul>
  );
}

export default TodoList;
