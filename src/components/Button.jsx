import { useState } from "react";

const Button = () => {
  const [message, setMessage] = useState("Olá");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Fui clicado!");
        }}
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Button;
