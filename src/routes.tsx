import { createBrowserRouter } from "react-router";
import App from "./App";
import { useTodoStore } from "./store";

export const ROUTES = createBrowserRouter([
  {
    index: true,
    loader: () => {
      useTodoStore.getState().fetchTodos();
    },
    Component: App,
  },
]);
