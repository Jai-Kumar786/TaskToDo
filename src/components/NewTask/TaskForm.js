import React, { useState } from "react";

import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      time: enteredTime,
      date: new Date(enteredDate),
    };

    props.onSaveTaskData(taskData);
    setEnteredTitle("");
    setEnteredTime("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>Task Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-task__control">
          <label>Time</label>
          <input type="time" value={enteredTime} onChange={timeChangeHandler} />
        </div>

        <div className="new-task__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-task__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add your Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
