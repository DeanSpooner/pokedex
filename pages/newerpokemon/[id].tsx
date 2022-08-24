import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import PokemonDetails from "../../src/components/PokemonDetails/PokemonDetails";
import { Props } from "./types";

const NewerPokemon: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const { id } = router.query;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(pokemon.name)}</title>
      </Head>
      <PokemonDetails pokemon={pokemon} id={id} />
    </>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export default NewerPokemon;
