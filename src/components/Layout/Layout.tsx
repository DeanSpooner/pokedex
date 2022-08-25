import * as React from "react";
import Link from "next/link";
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
          <Link href="/pokemon">
            <a>Kanto</a>
          </Link>
        </ChildContainer>
        <ChildContainer>
          <Link href="/newerpokemon">
            <a>Johto</a>
          </Link>
        </ChildContainer>
      </MainContainer>
      <ChildContainer isFooter>By Dean Spooner</ChildContainer>
    </ParentContainer>
  );
};

export default Layout;
