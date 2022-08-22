import * as React from "react";
import { Props } from "./types";

import { MonsterButton, PokemonImg } from "./PokemonButton.styles";

export const PokemonButton: React.FC<Props> = ({
  dexNumber,
  pokeName,
  spritePath,
}) => {
  return (
    <MonsterButton>
      <>
        {spritePath && <PokemonImg src={spritePath} />}#{dexNumber}: {pokeName}
      </>
    </MonsterButton>
  );
};

export default PokemonButton;
