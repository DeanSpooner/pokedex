import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import PokemonDetails from "../../src/components/PokemonDetails/PokemonDetails";
import { Props } from "./types";

const Pokemon: React.FC<Props> = ({ pokemon }) => {
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

export async function getStaticProps({ params }: { params: { id: number } }) {
  const id = params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=152");
  const data = await res.json();

  const paths = data.results.map((pokemon: object, index: number) => {
    return { params: { id: index.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Pokemon;
