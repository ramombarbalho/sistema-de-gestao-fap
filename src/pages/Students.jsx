import { NavLink } from "react-router-dom";
import { useState } from "react";
import { STUDENTS } from "../data/students";
function Students() {
  return (
    <div>
      ALUNOS <NavLink to="cadastrar">CADASTRAR ALUNOS</NavLink>
    </div>
  );
}

export default Students;
