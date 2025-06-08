import { create } from "zustand";
import type { Todo } from "../interfaces";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../apis/todo";

export type FilterType = "all" | "open" | "close";

type TodoState = {
  todos: Todo[];
  filter: FilterType;
  loading: boolean;
};

type TodoActions = {
  addTodo: (todo: Partial<Todo>) => Promise<void>;
  setFilter: (newFilter: FilterType) => void;
  fetchTodos: () => Promise<void>;
  updateTodo: (updatedTodo: Partial<Todo>) => Promise<Todo>;
  deleteTodo: (id: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
};

type TodoStore = TodoState & TodoActions;

export const useTodoStore = create<TodoStore>()((set, get) => ({
  todos: [],
  filter: "all",
  loading: false,
  addTodo: async (todo: Partial<Todo>) => {
    const newTodo = await addTodo(todo);
    set((previousState: TodoStore) => ({
      todos: [...previousState.todos, newTodo],
    }));
  },
  setFilter: (newFilter: FilterType) => set({ filter: newFilter }),
  fetchTodos: async () => {
    set({ loading: true });
    const todos = await fetchTodos();
    set({ todos, loading: false });
  },
  deleteTodo: async (id: string) => {
    await deleteTodo(id);
    get().fetchTodos();
  },
  updateTodo: async (updatedTodo: Partial<Todo>) => {
    const todo = await updateTodo(updatedTodo);
    get().fetchTodos();
    return todo;
  },
  setLoading: (loading) => set({ loading }),
}));

// const unsub = useTodoStore.subscribe(() => {
//   console.log("hello");
// });

// unsub();

// useTodoStore.setState()
