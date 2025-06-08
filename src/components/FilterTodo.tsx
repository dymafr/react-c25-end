import type { ChangeEvent } from "react";
import { useTodoStore, type FilterType } from "../store";

function FilterTodo() {
  const setFilter = useTodoStore(({ setFilter }) => setFilter);
  return (
    <select
      onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
        setFilter(value as FilterType)
      }
    >
      <option value="all">Tout</option>
      <option value="close">Terminé</option>
      <option value="open">Non terminé</option>
    </select>
  );
}

export default FilterTodo;
