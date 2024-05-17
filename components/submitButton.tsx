"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="p-2 bg-green-700 rounded-b-md text-white"
      disabled={pending}
    >
      Add +
    </button>
  );
}
