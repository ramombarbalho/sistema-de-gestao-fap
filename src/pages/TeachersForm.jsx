import styled from "styled-components";
import { TEACHERS } from "../data/teachers";
import { useState } from "react";

function TeachersForm()
  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    function newTeacher(e) {
      e.preventDefault();
      if (!name || !email || !phone) return;
      TEACHERS.push({
        name,
        email,
        phone: +phone,
      });
      setName("");
      setEmail("");
      setPhone("");
    }
  
  return (
    <form>
    <div>CADASTRAR PROFESSOR</div>
    <input
        onChange={(e) => setName(e.target.value.toUpperCase())}
        name="name"
        id="name"
        value={name}
        autoComplete="off"
        type="text"
        placeholder="NOME"
      />
       <input
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        name="email"
        id="email"
        value={email}
        autoComplete="off"
        type="email"
        placeholder="EMAIL"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        id="phone"
        value={phone}
        autoComplete="off"
        type="number"
        placeholder="TELEFONE"
      />
      <button onClick={newTeacher}>CADASTRAR PROFESSOR</button>
  </form>
  )
  
}

export default TeachersForm;
