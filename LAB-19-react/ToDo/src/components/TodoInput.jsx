import { useState } from "react";

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) return;
    onAdd(trimmedValue);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
