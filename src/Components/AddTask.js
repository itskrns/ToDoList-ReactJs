import { useEffect, useRef } from "react";

export function AddTask({ title, onSet, id, onAdd }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      inputEl.current.focus();
    },
    [title]
  );

  return (
    <form className="add__task" onSubmit={(e) => onAdd(e, title)}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => onSet(e.target.value)}
        ref={inputEl}
        required
      />
    </form>
  );
}
