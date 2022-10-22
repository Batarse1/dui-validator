import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  it('should have a button with text "Validar"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole("button", { name: "Validar" })).toBeInTheDocument();
  });
  /* Lo que demas que se les ocurra que puedan probar */
  it('should have a placeholder for input with text "Ingrese su DUI"', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("000000000")).toBeInTheDocument();
  });
  it("should have an onClick on button", () => {
    const { getByRole } = render(<App />);
    const button = getByRole("button", { name: "Validar" });
    userEvent.click(button);
  });
  // it should display Es valido! when input is 061921617
  it('should display "Es valido!" when input is 061921617', async () => {
    const { getByRole, getByText } = render(<App />);
    const input = getByRole("textbox");
    const button = getByRole("button", { name: "Validar" });
    userEvent.type(input, "061921617");
    userEvent.click(button);
    await waitFor(() => {
      expect(getByText("Es valido!")).toBeInTheDocument();
    });
  });
  // it should display No es valido! when input is 061921618
  it('should display "No es valido!" when input is 061921618', async () => {
    const { getByRole, getByText } = render(<App />);
    const input = getByRole("textbox");
    const button = getByRole("button", { name: "Validar" });
    userEvent.type(input, "061921618");
    userEvent.click(button);
    await waitFor(() => {
      expect(getByText("No es valido!")).toBeInTheDocument();
    });
  });
});
