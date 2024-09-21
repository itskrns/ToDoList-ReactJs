import { DateFormat } from "./DateFormat";

export function Task({ toDo, num, onChecked }) {
  return (
    <div className="task__content">
      <div>
        <input
          type="checkbox"
          checked={toDo.checked ? "checked" : ""}
          onChange={() => onChecked(toDo.id)}
        />
      </div>

      <div className="task" onClick={() => onChecked(toDo.id)}>
        <label>
          {num + 1}. {toDo?.title[0].toUpperCase() + toDo.title.slice(1)}
        </label>

        <span>
          {toDo.checked ? (
            <DateFormat date={toDo.completed}>Completed: </DateFormat>
          ) : (
            <DateFormat date={toDo.created}>Created: </DateFormat>
          )}
        </span>
      </div>
    </div>
  );
}
