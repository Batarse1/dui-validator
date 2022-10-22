import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });
  it('should have title "Mi DUI es valido?"', () => {
    const { getByText } = render(<App />);
    expect(getByText("Mi DUI es valido?")).toBeInTheDocument();
  });
  it("should have an input text", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });
  it.todo('should have a button with text "Validar"');
  /* Lo que demas que se les ocurra que puedan probar */
});
