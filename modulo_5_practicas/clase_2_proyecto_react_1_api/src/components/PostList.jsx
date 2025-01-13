import { useEffect, useState } from "react";
import { findAll } from "../services/PostApi";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setPosts(response.data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await findAll();
        setPosts(data);
      } catch (error) {
        setError(error);
        console.error("Error:", error);
      }
    };
    fetchPosts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-7xl font-bold">Lista de Posts</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
