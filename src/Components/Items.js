import { Task } from "./Task";

export function Items({ toDo, num, onChecked, onDelete, onUpdate }) {
  return (
    <li className={`list__items ${toDo.checked ? "completed" : ""}`}>
      <Task toDo={toDo} num={num} onChecked={onChecked} />

      <span>
        <img
          src="edit.png"
          alt="edit__icon"
          className="icons"
          onClick={() => onUpdate(toDo)}
        />

        <img
          src="delete.png"
          alt="delete__icon"
          className="icons"
          onClick={() => onDelete(toDo.id)}
        />
      </span>
    </li>
  );
}
