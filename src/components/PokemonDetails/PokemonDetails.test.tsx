/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";

describe("PokemonDetails", () => {
  it("should render with data", () => {
    PokemonDetails;
    const { getByTestId } = render(
      <PokemonDetails
        pokemon={{
          name: "Bulbasaur",
          base_experience: 64,
          types: [{ type: { name: "grass" } }],
          height: 7,
          weight: 69,
        }}
        id={"1"}
      />
    );
    expect(getByTestId("PokemonDetails")).toMatchSnapshot();
  });
});
