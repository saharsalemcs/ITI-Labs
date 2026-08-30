import FilterTabs from "./FilterTabs";

function TodoFooter({ itemsLeft, onClearCompleted, filter, onFilterChange }) {
  return (
    <footer className="todo-footer">
      <span>{itemsLeft} items left</span>

      <FilterTabs
        filter={filter}
        onChange={onFilterChange}
        className="filter-tabs--desktop"
      />

      <button className="todo-footer-clear" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoFooter;
