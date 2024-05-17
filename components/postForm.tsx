"use client";

import { createPost } from "@/lib/actions/todoActions";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "./submitButton";
import { revalidatePath } from "next/cache";

export const PostForm = () => {
  const { pending } = useFormStatus();
  return (
    <form
      className="flex flex-col"
      action={createPost}
      onSubmit={
        pending
          ? (event) => {
              event.preventDefault();
            }
          : undefined
      }
    >
      <input
        className="border rounded-t-md p-2"
        type="text"
        name="title"
        id="title"
        placeholder="Make dinner"
      />
      <input
        className="border p-2 mt-[-1px]"
        type="text"
        name="body"
        id="body"
        placeholder="Recipie..."
      />
      <SubmitButton />
    </form>
  );
};
