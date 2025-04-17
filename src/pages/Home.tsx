import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você poderia limpar o estado de autenticação, se necessário
    navigate("/"); // Redireciona para a tela de login
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo"> Capys</div>
        <div className="home-user-info">
          <div>Olá, Teste Capys</div>
          <div className="home-role">Desenvolvedor Front-End</div>
        </div>
        <button className="home-logout-button" onClick={handleLogout}>
          Sair
        </button>
      </header>

      <main className="home-main">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </div>
  );
}
