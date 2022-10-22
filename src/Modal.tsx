import { useEffect } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

interface ModalProps {
  isValid: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);
const portal = document.createElement("div");
modalRoot.appendChild(portal);

const Modal = ({ isOpen, onClose, isValid }: ModalProps) => {
  return createPortal(
    <div
      className={cx(
        "fixed top-0 left-0 w-full h-full flex items-center justify-center z-10",
        {
          "bg-black bg-opacity-50": isOpen,
          hidden: !isOpen,
        }
      )}
    >
      <div
        className={cx(
          "bg-white rounded-lg shadow-lg p-4 w-96 flex flex-col items-center",
          {
            "animate-fadeIn": isOpen,
            "animate-fadeOut": !isOpen,
          }
        )}
      >
        <h2 className="text-2xl font-bold mb-4">Resultado</h2>
        <p className="text-lg mb-4">
          {isValid ? "Es valido!" : "No es valido!"}
        </p>
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>,
    portal
  );
};

export default Modal;
