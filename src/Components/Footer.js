export function Footer({ toDo, sortBy, onSort }) {
  const totalTasks = toDo.length;
  const completedTasks = toDo.filter((task) => task.checked).length;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <>
      {totalTasks > 0 && (
        <footer className="footer">
          <p>
            Completed :
            {totalTasks === completedTasks ? (
              <span className="theme">All Done</span>
            ) : (
              `${completedTasks} of ${totalTasks} (${percentage}%)`
            )}
          </p>

          <span>
            <select value={sortBy} onChange={(e) => onSort(e.target.value)}>
              <option value="number">sort by number</option>
              <option value="task">sort by name</option>
              <option value="task">sort by creation</option>
              <option value="checked">sort by checked</option>
            </select>
          </span>
        </footer>
      )}
    </>
  );
}
