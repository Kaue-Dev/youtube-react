import React from "react";
import styled from "styled-components"
import { FaSearch } from "react-icons/fa";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #a8a8a8;
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  padding-left: 8px;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  input::placeholder {
    color: #a8a8a8;
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid #a8a8a8;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {

  const setValorDaBusca = setValorDoFiltro
  const valorDaBusca = valorDoFiltro

  return (
    <StyledSearch>
      <input type="text" placeholder="Pesquisar" value={valorDaBusca} onChange={(ev) => setValorDaBusca(ev.target.value)} />
      <button><FaSearch size={16} color="#4f4f4f"/></button>
    </StyledSearch>
  )
}