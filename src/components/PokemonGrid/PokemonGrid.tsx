import * as React from "react";
import { useEffect, useState } from "react";
import { Props } from "./types";
import { GridWrapper } from "./PokemonGrid.styles";
import PokemonButton from "../PokemonButton/PokemonButton";
import axios from "axios";

const PokemonGrid: React.FC<Props> = ({ region }) => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const result = await axios(
      region === "kanto"
        ? "https://pokeapi.co/api/v2/pokemon?limit=151"
        : "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    );

    await setPokemon(result.data.results);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const correctDexNum = (index: number) => {
    return region === "kanto" ? index + 1 : index + 152;
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <GridWrapper>
      {pokemon.map((monster, index) => (
        <PokemonButton
          pokeName={capitalizeFirstLetter(monster?.name)}
          dexNumber={correctDexNum(index)}
          spritePath={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${correctDexNum(
            index
          )}.png`}
        />
      ))}
    </GridWrapper>
  );
};

export default PokemonGrid;
