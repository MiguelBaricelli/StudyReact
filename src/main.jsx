import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TaskPage } from "./Pages/TaskPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Cria rotas para paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
