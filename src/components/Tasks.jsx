import { useNavigate } from "react-router-dom";
import Button from "./Button";


export function Tasks({props, OnTaskClick, OnDeleteTaskClick}) {
  const navigate = useNavigate()

  function OnSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title)
    query.set("description", task.descirption)
    navigate(`/task?${query.toString()}`)
  }

  console.log(props);

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow justify-center flex">
     
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            // eslint-disable-next-line react/prop-types
            onClick={() => props.onTaskClick(task.id)}

            className={`bg-slate-400 text-white p-2 rounded-md text-left w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => navigate()} className="bg-slate-400 p-2 rounded-md text-white">
            Ver

          </Button>
          <Button onClick={() => 
            props.OnDeleteTaskClick(task.id)
          } className="bg-slate-400 p-2 rounded-md text-white">
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}


