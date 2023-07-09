import React from "react";

export default function Todoitem({
  completed,
  id,
  title,
  toggletodo,
  deletetodo,
}) {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggletodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deletetodo(id)} className="btn btn-danger">
          delete
        </button>
      </li>
    </div>
  );
}
