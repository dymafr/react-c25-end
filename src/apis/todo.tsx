import type { Todo } from "../interfaces";

const BASE_URL = "https://restapi.fr/api/zustodo";

export async function fetchTodos(): Promise<Todo[]> {
  return await (await fetch(`${BASE_URL}`)).json();
}

export async function addTodo(newTodo: Partial<Todo>): Promise<Todo> {
  return await (
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTodo),
    })
  ).json();
}

export async function updateTodo(updatedToto: Partial<Todo>): Promise<Todo> {
  const { _id, ...restUpdatedTodo } = updatedToto;
  return await (
    await fetch(`${BASE_URL}/${_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(restUpdatedTodo),
    })
  ).json();
}

export async function deleteTodo(id: string): Promise<Todo> {
  return await (await fetch(`${BASE_URL}/${id}`, { method: "DELETE" })).json();
}
