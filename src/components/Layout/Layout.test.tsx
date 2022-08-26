/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import Layout, { NumberGenerator } from "./Layout";

describe("Layout", () => {
  it("should render with no data", () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId("Layout")).toMatchSnapshot();
  });
});

describe("NumberGenerator", () => {
  it("should return a number", () => {
    const result = NumberGenerator("kanto");
    expect(typeof result).toBe("number");
  });

  it("should return a number greater than 0 and less than 152 if the passed region is 'kanto'", () => {
    const result = NumberGenerator("kanto");
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(152);
  });

  it("should return a number greater than 151 and less than 252 if the passed region is not 'kanto'", () => {
    const result = NumberGenerator("johto");
    expect(result).toBeGreaterThan(151);
    expect(result).toBeLessThan(252);
  });
});
