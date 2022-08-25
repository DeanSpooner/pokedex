import * as React from "react";
import { useEffect, useState } from "react";
import { Props } from "./types";
import { GridWrapper } from "./PokemonGrid.styles";
import PokemonButton from "../PokemonButton/PokemonButton";
import axios from "axios";

const PokemonGrid: React.FC<Props> = ({ region }) => {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchPokemon = async () => {
    const result = await axios(
      region === "kanto"
        ? "https://pokeapi.co/api/v2/pokemon?limit=151"
        : "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    );

    const pokemonResults = await result.data.results.map(
      (obj: Object, index: number) => ({
        ...obj,
        dexNumber: region === "kanto" ? index + 1 : index + 152,
      })
    );

    await setPokemon(pokemonResults);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const changeHandler = (event: { target: { value: string } }) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <GridWrapper>
      <input onChange={changeHandler} />
      {pokemon
        .filter(
          (pokemon) =>
            pokemon.name.includes(filter) ||
            pokemon.dexNumber.toString().includes(filter)
        )
        .map((monster) => (
          <PokemonButton
            pokeName={capitalizeFirstLetter(monster?.name)}
            dexNumber={monster?.dexNumber}
            spritePath={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monster?.dexNumber}.png`}
          />
        ))}
    </GridWrapper>
  );
};

export default PokemonGrid;
