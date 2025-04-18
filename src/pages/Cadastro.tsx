import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

type FormData = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  bio: string;
  contato: string;
  cargo: string;
};

export default function Cadastro() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    bio: "",
    contato: "",
    cargo: "",
  });

  const [mensagem, setMensagem] = useState<null | {
    tipo: "sucesso" | "erro";
    texto: string;
  }>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setMensagem({ tipo: "erro", texto: "Senhas não coincidem." });
      return;
    }
    setMensagem({ tipo: "sucesso", texto: "Conta criada com sucesso!" });
    console.log(formData);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-header">
        <h1 className="cadastro-logo">Capys</h1>
        <button onClick={() => navigate("/")} className="cadastro-voltar">Voltar</button>
      </div>

      {mensagem && (
        <div
          className={`cadastro-mensagem ${
            mensagem.tipo === "sucesso" ? "mensagem-sucesso" : "mensagem-erro"
          }`}
        >
          {mensagem.texto}
        </div>
      )}

      <div className="cadastro-card">
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            name="nome"
            placeholder="Digite aqui seu nome"
            value={formData.nome}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Digite aqui seu email"
            value={formData.email}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            name="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            value={formData.senha}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            name="confirmarSenha"
            type="password"
            placeholder="Digite novamente sua senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            className="cadastro-input"
          />
          <textarea
            name="bio"
            placeholder="Fale sobre você"
            value={formData.bio}
            onChange={handleChange}
            className="cadastro-textarea"
          />
          <input
            name="contato"
            placeholder="Opção de contato"
            value={formData.contato}
            onChange={handleChange}
            className="cadastro-input"
          />
          <select
            title="cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            className="cadastro-select"
          >
            <option value="">Selecionar Cargo</option>
            <option value="frontend">Desenvolvedor Front-End</option>
            <option value="backend">Desenvolvedor Back-End</option>
            <option value="fullstack">Fullstack</option>
          </select>
          <button type="submit" className="cadastro-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
