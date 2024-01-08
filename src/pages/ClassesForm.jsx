import { useState } from "react";
import { CLASSES } from "../data/classes";
import styled from "styled-components";
import { TEACHERS } from "../data/teachers";

function ClassesForm() {
  const [local, setLocal] = useState("");
  const [days, setDays] = useState("");
  const [hour, setHour] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");

  function newClass(e) {
    e.preventDefault();
    if (!local || !days || !hour || !stack || !teacher) return;
    const data = {
      id: String(CLASSES.length + 1).padStart(3, "0"),
      local,
      days: +days,
      hour: +hour,
      stack: +stack,
      teacher,
    };
    CLASSES.push(data);
    setLocal("");
    setDays("");
    setHour("");
    setStack("");
    setTeacher("");
  }

  return (
  <form>
    <div>CADASTRAR TURMA</div>
  <select
        onChange={(e) => setLocal(e.target.value)}
        name="local"
        id="local"
        value={local}
      >
        <option value="">--- INFORME O LOCAL</option>
        <option value="SOFTEX">SOFTEX</option>
        <option value="UFPB">UFPB</option>
        <option value="UFRN">UFRN</option>
    </select>
    <select
        onChange={(e) => setDays(e.target.value)}
        name="days"
        id="days"
        value={days}
      >
        <option value="">--- INFORME OS DIAS</option>
        <option value="1">SEG - QUA</option>
        <option value="2">TER - QUI</option>
      </select>
      <select 
        onChange={(e) => setHour(e.target.value)}
        name="hour"
        id="hour"
        value={hour}
      >
        <option value="">--- INFORME O HORÁRIO</option>
        <option value="1">08:30 as 11:30</option>
        <option value="2">14:00 as 17:00</option>
        <option value="3">18:30 as 21:30</option>
      </select>
      <select
        onChange={(e) => setCourse(e.target.value)}
        name="course"
        id="course"
        value={course}
      >
        <option value="">--- INFORME O CURSO</option>
        <option value="1">BACK-END</option>
        <option value="2">FRONT-END</option>
        </select>
        <button onClick={newClass}>CADASTRAR TURMA</button>
    </form>)
}

export default ClassesForm;
