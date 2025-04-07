import { useState } from "react";

export function AddTask(OnAddTaskSubmit) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      type="text"
      placeholder="Titulo"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      type="text"
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
