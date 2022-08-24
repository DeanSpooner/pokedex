import * as React from "react";
import { PokemonGrid } from "../PokemonGrid/PokemonGrid";
import {
  ChildContainer,
  MainContainer,
  ParentContainer,
  Title,
} from "./Layout.styles.js";

const Layout = () => {
  return (
    <ParentContainer>
      <ChildContainer isTitle>
        <Title>Dean's Pokédex</Title>
      </ChildContainer>
      <MainContainer>
        <ChildContainer>
          <PokemonGrid></PokemonGrid>
        </ChildContainer>
      </MainContainer>
      <ChildContainer>By Dean Spooner</ChildContainer>
    </ParentContainer>
  );
};

export default Layout;
