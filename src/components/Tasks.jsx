

function Tasks({props, OnTaskClick, OnDeleteTaskClick}) {
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

          <button className="bg-slate-400 p-2 rounded-md text-white">
            Ver
          </button>
          <button onClick={() => 
            props.OnDeleteTaskClick(task.id)
          } className="bg-slate-400 p-2 rounded-md text-white">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
