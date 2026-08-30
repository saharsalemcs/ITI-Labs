function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <button className="todo-item-checkbox" onClick={() => onToggle(todo.id)}>
        {todo.completed && "✓"}
      </button>
      <span className="todo-text">{todo.text}</span>

      <button className="delete" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
}

export default TodoItem;
