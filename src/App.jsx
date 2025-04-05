import { useState } from "react";
import "./App.css";
import {Tasks, AddTask } from "../src/components"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Gerenciador de tarefas</h1>
        <Tasks />
        <AddTask />
      </div>
    </>
  );
}

export default App;
