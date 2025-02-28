import { useState, FormEvent } from "react";

function TaskForm() {
  const [taskName, setTaskName] = useState<string>(""); // Initializing taskName as a string
  const [taskDescription, setTaskDescription] = useState<string>(""); // Initializing taskDescription as a string

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default behavior of reloading the page on form submission
    if (!taskName || !taskDescription) {
      alert("Please fill out all fields!");
      return;
    }
    alert(`Task Created!\nName: ${taskName}\nDescription: ${taskDescription}`);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className="task-form-container">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)} // Updates the taskName state
            placeholder="Enter the task name"
            required
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Task Description</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)} // Updates the taskDescription state
            placeholder="Enter the task description"
            required
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
