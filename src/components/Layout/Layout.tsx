import * as React from "react";
import Link from "next/link";
import {
  ChildContainer,
  MainContainer,
  ParentContainer,
  Title,
} from "./Layout.styles.js";
import Image from "next/image.js";

interface Props {}

export const NumberGenerator = (region: string) => {
  if (region === "kanto") {
    return Math.floor(Math.random() * 151);
  }
  return Math.floor(Math.random() * 100) + 151;
};

const Layout: React.FC<Props> = () => {
  return (
    <ParentContainer data-testid="Layout">
      <ChildContainer isTitle>
        <Title>Dean's Pokédex</Title>
      </ChildContainer>
      <MainContainer>
        <ChildContainer isKanto>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumberGenerator(
              "kanto"
            )}.png`}
            width="240px"
            height="240px"
          />
          <Link href="/pokemon">Kanto Dex - powered by SSG!</Link>
        </ChildContainer>
        <ChildContainer isJohto>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumberGenerator(
              "johto"
            )}.png`}
            width="240px"
            height="240px"
          />
          <Link href="/newerpokemon">Johto Dex - powered by SSR!</Link>
        </ChildContainer>
      </MainContainer>
      <ChildContainer isFooter>
        <a href="https://github.com/DeanSpooner" target="_blank">
          By Dean Spooner
        </a>
      </ChildContainer>
    </ParentContainer>
  );
};

export default Layout;
