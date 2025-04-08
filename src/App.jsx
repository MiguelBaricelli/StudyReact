import "./App.css";
import { Tasks } from "./components/Tasks.jsx";
import { AddTask } from "./components/AddTask.jsx";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //chamar api
    async function fetchTasks() {
      const response = await fetch(
        "http://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );
      const data = await response.json();

      fetchTasks(data);
    }

    
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function OnDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function OnAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 justify-center items-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de tarefas
          </h1>
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            OnDeleteTaskClick={OnDeleteTaskClick}
          />
          <AddTask OnAddTaskSubmit={OnAddTaskSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
