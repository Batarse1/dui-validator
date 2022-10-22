import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });
  it.todo('should have title "Mi DUI es valido?"');
  it.todo("should have an input text");
  it.todo('should have a button with text "Validar"');
  /* Lo que demas que se les ocurra que puedan probar */
});
