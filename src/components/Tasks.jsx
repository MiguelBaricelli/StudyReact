function Tasks(props) {
  console.log(props);

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow justify-center flex">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
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
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
