import { useState } from "react";
import { Items } from "./Components/Items";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { AddTask } from "./Components/AddTask";
import { ItemsList } from "./Components/ToDoList";
import { useLocalStorage } from "./Components/useLocalStorage";

export default function App() {
  const [toDoList, setToDoList] = useLocalStorage([], "todoList");
  const [sortBy, setSortBy] = useState("number");
  const [selected, setSelected] = useState(null);
  const [task, setTask] = useState("");
  let toDoListCopy;

  function handleAddTask(e, title) {
    e.preventDefault();

    const newTask = {
      title,
      id: toDoList.length + 1,
      checked: false,
      created: new Date(),
      completed: " ",
    };

    if (selected) {
      setToDoList((toDoList) =>
        toDoList.map((task) =>
          task.id === selected.id ? (task = { ...selected, title }) : task
        )
      );
    } else {
      setToDoList((toDoList) => [...toDoList, newTask]);
    }

    setTask("");
    setSelected(null);
  }

  function handleDeleteTask(id) {
    setToDoList((toDoList) => toDoList.filter((task) => task.id !== id));
  }

  function handleUpdateTask(toDo) {
    setTask((task) => (task = toDo.title));
    setSelected((selected) => (selected = toDo));
  }

  function handleChecked(id) {
    setToDoList((toDoList) =>
      toDoList.map((task) =>
        task.id !== id
          ? { ...task }
          : {
              ...task,
              checked: !task.checked,
              completed: task.completed ? " " : new Date(),
            }
      )
    );
  }

  if (sortBy === "number") {
    toDoListCopy = toDoList;
  }

  if (sortBy === "task") {
    toDoListCopy = toDoList
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "checked") {
    toDoListCopy = toDoList.slice().sort((a, b) => a.checked - b.checked);
  }

  if (sortBy === "created") {
    toDoListCopy = toDoList.slice().sort((a, b) => a.created - b.created);
  }

  return (
    <div className="app">
      <Header>
        <img src="logo.png" alt="ToDoList" className="logo" />
        <h1>To-Do List</h1>
      </Header>

      <main className="main">
        <AddTask
          id={toDoList.length + 1}
          title={task}
          onSet={setTask}
          onAdd={handleAddTask}
        />

        <ItemsList>
          {toDoListCopy.map((task, ind) => (
            <Items
              key={task.id}
              toDo={task}
              num={ind}
              onChecked={handleChecked}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          ))}
        </ItemsList>
      </main>

      <Footer toDo={toDoList} sortBy={sortBy} onSort={setSortBy} />
    </div>
  );
}
