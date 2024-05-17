import { getPosts } from "@/lib/actions/todoActions";

export const AllPosts = async () => {
  const posts = await getPosts();

  if (!posts) {
    return <div className="text-xl text-green-500">No Posts Here!</div>;
  }

  return (
    <div className="">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col">
          <h2 className="text-green-400 text-xl">{post.title}</h2>
          <p className="text-md text-green-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};
