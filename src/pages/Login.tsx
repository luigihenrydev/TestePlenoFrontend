import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login:", { email, senha });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">capys</h1>
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="login-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <div className="login-footer">
          <p>Ainda não possui uma conta?</p>
          <button
            onClick={() => navigate("/cadastro")}
            className="login-secondary-button"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}
