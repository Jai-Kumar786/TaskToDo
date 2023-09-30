import React, { useState } from "react";

import Card from "../UI/Card";
import TasksFilter from "./TasksFilter";
import TasksList from "./TasksList";

import "./Tasks.css";

const Tasks = (props) => {
  const [filteredPriority, setFilteredPriority] = useState("important");

  const filterChangeHandler = (selectedPriority) => {
    setFilteredPriority(selectedPriority);
  };

  const filteredTasks = props.items.filter((task) => {
    return task.priority === filteredPriority;
  });

  return (
    <div>
      <Card className="tasks">
        <TasksFilter
          selected={filteredPriority}
          onChangeFilter={filterChangeHandler}
        />

        <TasksList items={filteredTasks} onRemove={props.onRemove} />
      </Card>
    </div>
  );
};

export default Tasks;
