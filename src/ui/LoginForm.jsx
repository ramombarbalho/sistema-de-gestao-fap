import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const access = name === "softex" && pass === "123";

  function login(e) {
    e.preventDefault();
    if (!access) return;
    navigate("/dashboard", { replace: true });
  }

  return (
    <form>
      <div>
        <label htmlFor="name">NOME</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="pass">SENHA</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="pass"
          autoComplete="off"
        />
      </div>
      {<button onClick={login}>ENTRAR</button>}
    </form>
  );
}

export default LoginForm;
