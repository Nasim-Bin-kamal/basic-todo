import { useEffect, useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // load data
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // update data on local storage when task change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index]);
  };
  return (
    <div className="mx-20">
      <h1>TODO List</h1>
      <input
        className="border-2 p-2"
        type="text"
        placeholder="enter text"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="mx-2 bg-slate-400 p-2 rounded-md" onClick={addTask}>
        ADD
      </button>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="py-2">
              <span>{task}</span>
              <button
                className="mx-2 bg-slate-400 p-2 rounded-md"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="mx-2 bg-slate-400 p-2 rounded-md"
                onClick={() => moveTaskUp(index)}
              >
                Up
              </button>
              <button
                className="mx-2 bg-slate-400 p-2 rounded-md"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
              <button onClick={() => handleEditTask(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
