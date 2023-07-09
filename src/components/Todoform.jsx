import { useState } from "react";
import React from "react";

export default function Todoform({ addtodo }) {
  const [newItem, setnewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addtodo(newItem);
    setnewItem("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label
            htmlFor="item"
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            New Item
          </label>
          <input
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}
