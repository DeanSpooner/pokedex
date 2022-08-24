import * as React from "react";
import { Props } from "./types";
import { useRouter } from "next/router";

import { MonsterButton, PokemonImg } from "./PokemonButton.styles";

const PokemonButton: React.FC<Props> = ({
  dexNumber,
  pokeName,
  spritePath,
}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(
      dexNumber < 152 ? `/pokemon/${dexNumber}` : `/newerpokemon/${dexNumber}`
    );
  };

  return (
    <MonsterButton onClick={clickHandler}>
      <>
        {spritePath && <PokemonImg src={spritePath} />}#{dexNumber}: {pokeName}
      </>
    </MonsterButton>
  );
};

export default PokemonButton;
