/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import PokemonType from "./PokemonType";

describe("PokemonType", () => {
  it("should render with no data", () => {
    const { getByTestId } = render(<PokemonType elementType="fire" />);
    expect(getByTestId("PokemonType")).toMatchSnapshot();
  });
});
