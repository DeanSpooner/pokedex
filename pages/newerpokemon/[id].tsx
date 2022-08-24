import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import { Props } from "./types";

const NewerPokemon: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <h1>
        This is Pokémon #{id}, {pokemon.name}
      </h1>
      <p>Base experience: {pokemon.base_experience}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={`${pokemon.name} artwork`}
      />
    </>
  );
};

// Use to make the paths SSR, dynamic and can request
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
