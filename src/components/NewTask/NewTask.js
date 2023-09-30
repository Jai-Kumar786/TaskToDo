import React, { useState } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("important");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() === "" ||
      enteredTime.trim() === "" ||
      enteredDate.trim() === ""
    ) {
     
      return;
    }

    const taskData = {
      title: enteredTitle,
      time: enteredTime,
      date: new Date(enteredDate),
      priority: enteredPriority,
    };

    props.onAddTask(taskData);
    setEnteredTitle("");
    setEnteredTime("");
    setEnteredDate("");
    setEnteredPriority("important");
  };

  return (
    <form onSubmit={submitHandler} className="new-task">
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

        <div className="new-task__control">
          <label>Priority</label>
          <select value={enteredPriority} onChange={priorityChangeHandler}>
            <option value="veryimportant">Very Important</option>
            <option value="important">Important</option>
            <option value="do_at_your_pace">At Your Pace</option>
            <option value="desirable">Desirable</option>
          </select>
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

export default NewTask;
