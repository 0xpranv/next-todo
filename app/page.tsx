import { AllPosts } from "@/components/allPosts";
import { PostForm } from "@/components/postForm";
import { SubmitButton } from "@/components/submitButton";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <h2 className="text-5xl text-center">🌸</h2>
          <UserButton />
        </div>
        <div className="pt-7 flex flex-col w-full">
          <label
            className="text-xl font-extrabold text-green-800 p-1"
            htmlFor=""
          >
            Enter a new Todo
          </label>
          <PostForm />
        </div>
      </div>
      <div className="pt-5">
        <AllPosts />
      </div>
    </main>
  );
}
