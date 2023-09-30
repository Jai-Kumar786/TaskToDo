import React from "react";

import TaskDate from "./TaskDate";
import Card from "../UI/Card";
import "./TaskItem.css";

const TaskItem = (props) => {
  const handleRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <li>
      <Card className="task-item">
        <TaskDate date={props.date} />
        <div className="task-item__description">
          <button
            onClick={(event) => handleRemove(event)}
            className="task-item__close"
          >
            X
          </button>
          <h2>{props.title}</h2>
          <div className="task-item__time">{props.time}</div>
        </div>
      </Card>
    </li>
  );
};

export default TaskItem;
