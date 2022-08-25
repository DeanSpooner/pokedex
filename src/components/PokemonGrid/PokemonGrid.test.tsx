/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import PokemonGrid from "./PokemonGrid";

describe("PokemonGrid", () => {
  it("matches snapshot", () => {
    const { getByTestId } = render(<PokemonGrid region="kanto" />);
    expect(getByTestId("PokemonGrid")).toMatchSnapshot();
  });
});
