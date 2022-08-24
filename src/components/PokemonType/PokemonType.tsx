import * as React from "react";
import { Props } from "./types";

import { MonsterType } from "./PokemonType.styles";

const PokemonType: React.FC<Props> = ({ elementType }) => {
  return (
    <MonsterType elementType={elementType}>
      <p>{elementType && elementType.toUpperCase()}</p>
    </MonsterType>
  );
};

export default PokemonType;
