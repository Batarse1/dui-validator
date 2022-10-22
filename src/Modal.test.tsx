import { describe, expect, it, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "./Modal";

describe("Modal", () => {
  const handleClose = vi.fn(() => {});

  it("should render", () => {
    render(<Modal isOpen onClose={handleClose} isValid={false} />);
  });
  it("should have a title", () => {
    const { getByText } = render(
      <Modal isOpen onClose={handleClose} isValid={false} />
    );
    expect(getByText("Resultado")).toBeInTheDocument();
  });
  it("should have a button", () => {
    const { getByRole } = render(
      <Modal isOpen onClose={handleClose} isValid={false} />
    );
    expect(getByRole("button", { name: "Cerrar" })).toBeInTheDocument();
  });
  it("should have an onClick on button", () => {
    const { getByRole } = render(
      <Modal isOpen onClose={handleClose} isValid={false} />
    );
    const button = getByRole("button", { name: "Cerrar" });
    userEvent.click(button);
  });
  it("should call onClose when button is clicked", async () => {
    const { getByRole } = render(
      <Modal isOpen onClose={handleClose} isValid={false} />
    );
    const button = getByRole("button", { name: "Cerrar" });
    userEvent.click(button);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });
  it("should show Es valido! when isValid is true", () => {
    const { getByText, debug } = render(
      <Modal isOpen onClose={handleClose} isValid={true} />
    );
    expect(getByText("Es valido!")).toBeInTheDocument();
  });
  it("should show No es valido! when isValid is false", () => {
    const { getByText } = render(
      <Modal isOpen onClose={handleClose} isValid={false} />
    );
    expect(getByText("No es valido!")).toBeInTheDocument();
  });
});
