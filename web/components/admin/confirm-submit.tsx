"use client";

import type { ComponentProps } from "react";

/**
 * Bouton de soumission qui demande confirmation avant d'envoyer le formulaire
 * parent — utilisé pour la suppression d'un évènement dans le backoffice.
 */
export function ConfirmSubmit({
  message,
  children,
  ...props
}: ComponentProps<"button"> & { message: string }) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
