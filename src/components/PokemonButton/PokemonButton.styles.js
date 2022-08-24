import styled from "styled-components";

export const MonsterButton = styled.button`
  align-items: center;
  grid-column: auto;
  background-color: lightgray;
  border-radius: 12px;
  width: 150px;
  height: 150px;
  font-size: 16px;
  margin: 6px;
  :hover {
    background-color: lightgreen;
    cursor: pointer;
  }
`;

export const PokemonImg = styled.img`
  margin: auto;
  display: block;
`;
