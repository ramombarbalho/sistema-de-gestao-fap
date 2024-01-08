
import styled from "styled-components";
import { useState } from "react";
import { STUDENTS } from "../data/students";

function StudentsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  function newStudent(e) {
    e.preventDefault();
    if (!name || !email || !phone || !cpf || !status) return;
    STUDENTS.push({
      name,
      email,
      cpf,
      phone: +phone,
      status: +status,
    });
    setName("");
    setEmail("");
    setCpf("");
    setPhone("");
    setStatus("");
  }
  return (

    <form>
      <div>CADASTRAR ALUNO</div>
      <input
        onChange={(e) => setName(e.target.value.toUpperCase())}
        name="name"
        id="name"
        value={name}
        autoComplete="off"
        type="text"
        placeholder="NOME">
        </input>
        <input
        onChange={(e) => setCpf(e.target.value)}
        name="cpf"
        id="cpf"
        value={cpf}
        autoComplete="off"
        type="number"
        placeholder="CPF"
        ></input>
        <input
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        name="email"
        id="email"
        value={email}
        autoComplete="off"
        type="email"
        placeholder="EMAIL"
        ></input>
        <input
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        id="phone"
        value={phone}
        autoComplete="off"
        type="number"
        placeholder="TELEFONE"
      ></input>
      <select>
        onChange={(e) => setStatus(e.target.value)}
        name="status"
        id="status"
        value={status}
        <option value="">--- INFORME O STATUS</option>
        <option value="1">CURSANDO</option>
        <option value="2">DESATIVADO</option>
      </select>
      <button onClick={newStudent}>CADASTRAR ALUNO</button>
      </form>)
}
export default StudentsForm;
