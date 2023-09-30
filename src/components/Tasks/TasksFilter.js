import React from "react";

import "./TasksFilter.css";

const TasksFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="tasks-filter">
      <div className="tasks-filter__control">
        <label>Filter by Priority</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="veryimportant">Very Imporant</option>
          <option value="important">Important</option>
          <option value="do_at_your_pace">At your Pace</option>
          <option value="desirable">Desirable</option>
        </select>
      </div>
    </div>
  );
};

export default TasksFilter;
