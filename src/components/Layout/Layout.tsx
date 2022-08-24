import * as React from "react";
import { useRouter, Router } from "next/router";
import {
  ChildContainer,
  MainContainer,
  ParentContainer,
  Title,
} from "./Layout.styles.js";
import Link from "next/link";

const Layout = () => {
  const router = useRouter();

  const clickHandler = (region: string) => {
    router.push(`/${region}`);
  };

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
