import Head from "next/head";
import React from "react";
import PokemonGrid from "../../src/components/PokemonGrid/PokemonGrid";

const NewPokemonList = () => {
  return (
    <>
      <Head>
        <title>Johto Pokédex</title>
      </Head>
      <div>
        <PokemonGrid region="johto"></PokemonGrid>
      </div>
    </>
  );
};

export default NewPokemonList;
