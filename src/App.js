import React, { useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import "./header.css";
const DUMMY_TASKS = [
  {
    id: "e1",
    title: "Shopping",
    time: "12:00",
    date: new Date(2020, 7, 14),
    priority: "important",
  },
  {
    id: "e3",
    title: "Meeting",
    time: "14:00",
    date: new Date(2021, 2, 28),
    priority: "veryimportant",
  },
  {
    id: "e4",
    title: "Walking",
    time: "18:00",
    date: new Date(2021, 5, 12),
    priority: "important",
  },
];
function Header() {
  return (
    <header className="header">
      <h1>TO DO TASK LIST</h1>
      <p>Make your plans here</p>
    </header>
  );
}
const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (taskData) => {
    setTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    });
  };
  const removeTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div>
      <Header />
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} onRemove={removeTaskHandler} />
    </div>
  );
};

export default App;
