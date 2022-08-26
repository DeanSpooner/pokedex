import Image from "next/image";
import React from "react";
import PokemonType from "../PokemonType/PokemonType";
import {
  PokemonDetailsWrapper,
  PokemonImageWrapper,
  PokemonDetailText,
} from "./PokemonDetails.styles";
import { Props } from "./types";

const PokemonDetails: React.FC<Props> = ({ pokemon, id }) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <PokemonDetailsWrapper data-testid="PokemonDetails" className="">
      <h1>
        This is Pokémon #{id}, {capitalizeFirstLetter(pokemon?.name)}
      </h1>
      <PokemonImageWrapper firstType={pokemon?.types[0]?.type?.name}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`${capitalizeFirstLetter(pokemon?.name)} artwork`}
          width="240px"
          height="240px"
        />
      </PokemonImageWrapper>
      <PokemonDetailText>
        Types:{" "}
        {pokemon?.types?.map((type) => (
          <PokemonType elementType={type?.type?.name} key={type?.type?.name} />
        ))}
      </PokemonDetailText>
      <PokemonDetailText>
        Base experience: {pokemon?.base_experience}
      </PokemonDetailText>
      <PokemonDetailText>Height: {pokemon?.height / 10}m</PokemonDetailText>
      <PokemonDetailText>Weight: {pokemon?.weight / 10}kg</PokemonDetailText>
    </PokemonDetailsWrapper>
  );
};

export default PokemonDetails;
