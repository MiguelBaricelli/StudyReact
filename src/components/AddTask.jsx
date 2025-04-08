import { useState } from "react";
import { Input } from "./input";

export function AddTask(OnAddTaskSubmit) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <Input
      placeholder="Titulo"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />

    <Input
      placeholder="Descrição"
      value={description}
      onChange={(event) => setTitle(event.target.value)}
    />

    <button
      onClick={() => {
        if (!title.trim() || description.trim()) {
          return alert("Preencha o titulo e a descrição");
        }
        OnAddTaskSubmit(title, description);
        setTitle(""), setDescription("");
      }}
      className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
    >
      Adicionar
    </button>
  </div>;
}
