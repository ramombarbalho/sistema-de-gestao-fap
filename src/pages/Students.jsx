import styled from "styled-components";
import { STUDENTS } from "../data/students";
import { NavLink } from "react-router-dom";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1.4fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-bg-container-secondary);
  border-bottom: 1px solid var(--color-border);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  transition: all 0.3s;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1.4fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  background-color: var(--color-bg-container-primary);
  border-bottom: 1px solid var(--color-border);
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  transition: all 0.3s;
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: var(--color-bg-container-primary);

    border-radius: 5px;
    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-hover);
    background-color: var(--color-bg-container-secondary);
  }
`;

const StyledStatus = styled.span`
  padding: 0.3rem;
  border-radius: 3px;
  color: #222;
  font-weight: 600;
  text-align: center;
  width: 11rem;

  
`;

function Students() {
  return (
    <>
      <PageHeader>
        <div>ALUNOS</div>
        <StyledNavLink to="cadastrar">CADASTRAR ALUNOS</StyledNavLink>
      </PageHeader>
      <div>
        <TableHeader>
          <div>Nome</div>
          <div>Email</div>
          <div>CPF</div>
          <div>Ações</div>
          <div></div>
        </TableHeader>
        {STUDENTS.map((student) => (
          <TableRow key={student.id}>
            <div>{student.name}</div>
            <div>{student.email}</div>
            <div>{student.cpf}</div>
            <StyledStatus status={student.status}>
              {student.status ? "ativo" : "inativo"}
            </StyledStatus>
            <div>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
            <div></div>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Students;
