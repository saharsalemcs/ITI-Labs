import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { useMemo, useState } from "react";
import FilterTabs from "./components/FilterTabs";

let nextId = 7;

function App() {
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div className="app">
      <div className="app-container">
        <TodoHeader />

        <div className="app-input-wrapper">
          <TodoInput onAdd={addTodo} />
        </div>

        <div className="app-list-wrapper">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={DeleteTodo}
          />
          <TodoFooter
            onClearCompleted={clearCompleted}
            filter={filter}
            itemsLeft={itemsLeft}
            onFilterChange={setFilter}
          />
        </div>

        <div className="app-mobile-filters">
          <FilterTabs filter={filter} onChange={setFilter} />
        </div>
        <p className="app-drag-hint">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
