import { useNavigate, useSearchParams } from "react-router-dom";

export function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-screen h-screen bg-slate-500 justify-center items-center p-6">
        <div className="w-[500px] space-y-4">
          <div className="flex justify-center relative mb-4">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-0 text-slate-100"
            >
              Voltar
            </button>
          </div>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            DETALHES DA TAREFA
          </h1>

          <div className="bg-slate-200 p-4 rounded-md">
            <h1 className="text-xl  font-bold text-slate-600">{title}</h1>
            <p className="text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
