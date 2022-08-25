/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import PokemonButton from "./PokemonButton";

describe("MonsterButton", () => {
  it("matches snapshot", () => {
    const { getByTestId } = render(
      <PokemonButton
        pokeName={"Pikachu"}
        dexNumber={25}
        spritePath={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${25}.png`}
      />
    );
    expect(getByTestId("MonsterButton")).toMatchSnapshot();
  });
});
