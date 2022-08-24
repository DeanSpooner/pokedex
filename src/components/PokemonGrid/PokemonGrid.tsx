import * as React from "react";
import { useEffect, useState } from "react";
import { Props } from "./types";
import { GridWrapper } from "./PokemonGrid.styles";
import PokemonButton from "../PokemonButton/PokemonButton";
import axios from "axios";

export const PokemonGrid: React.FC<Props> = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=151");

    await setPokemon(result.data.results);
    await console.log({ pokemon });
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <GridWrapper>
      {pokemon.map((monster, index) => (
        <PokemonButton
          pokeName={capitalizeFirstLetter(monster?.name)}
          dexNumber={index + 1}
          spritePath={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
        />
      ))}
    </GridWrapper>
  );
};

export default PokemonGrid;
