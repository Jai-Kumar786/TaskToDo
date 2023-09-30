import React from "react";

import TaskItem from "./TaskItem";
import "./TasksList.css";

const TasksList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="tasks-list__fallback">Found no Tasks</h2>;
  }

  return (
    <ul className="tasks-list">
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          time={task.time}
          date={task.date}
          id={task.id}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
};

export default TasksList;
