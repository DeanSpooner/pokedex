/** @jest-environment jsdom */

import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("matches snapshot", () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId("Layout")).toMatchSnapshot();
  });
});
