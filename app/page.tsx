import { ListItem } from "@/components/listItem";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col max-w-2xl p-4">
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
          <input
            className="border rounded-t-md p-2"
            type="text"
            placeholder="Make dinner"
          />
          <button className="p-2 bg-green-700 rounded-b-md text-white">
            Add +
          </button>
        </div>
        <div className="pt-5">
          <ol>
            <ListItem />
            <ListItem />
            <ListItem />
          </ol>
        </div>
      </div>
    </main>
  );
}
