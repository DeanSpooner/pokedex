import React from "react";
import { Button } from "../shared/shared.styles.js";
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
        <ChildContainer>Choose your Pokémon!</ChildContainer>
        <ChildContainer isMain>Pokémon description</ChildContainer>
      </MainContainer>
      <ChildContainer>By Dean Spooner</ChildContainer>
    </ParentContainer>
  );
};

export default Layout;
