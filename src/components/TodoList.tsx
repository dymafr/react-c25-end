import { useShallow } from "zustand/shallow";
import { useTodoStore } from "../store";
import TodoItem from "./TodoItem";

function TodoList() {
  const loading = useTodoStore(({ loading }) => loading);
  const filteredTodos = useTodoStore(
    useShallow(({ todos, filter }) => {
      switch (filter) {
        case "open": {
          return todos.filter(({ done }) => !done);
        }
        case "close": {
          return todos.filter(({ done }) => done);
        }
        default: {
          return todos;
        }
      }
    })
  );
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
