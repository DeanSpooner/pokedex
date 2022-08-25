import Head from "next/head";
import React from "react";
import PokemonGrid from "../../src/components/PokemonGrid/PokemonGrid";

const PokemonList = () => {
  return (
    <>
      <Head>
        <title>Kanto Pokédex</title>
      </Head>
      <div>
        <PokemonGrid region={"kanto"} />
      </div>
    </>
  );
};

export default PokemonList;
