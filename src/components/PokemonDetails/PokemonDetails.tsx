import React from "react";
import PokemonType from "../PokemonType/PokemonType";
import { Props } from "./types";

const PokemonDetails: React.FC<Props> = ({ pokemon, id }) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <h1>
        This is Pokémon #{id}, {capitalizeFirstLetter(pokemon.name)}
      </h1>
      <p>Base experience: {pokemon.base_experience}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={`${pokemon.name} artwork`}
      />
      <p>
        Types:{" "}
        {pokemon.types.map((type) => (
          <PokemonType elementType={type.type.name} />
        ))}
      </p>
    </>
  );
};

export default PokemonDetails;
