import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = `https://dummyjson.com`;

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(`${BASE_URL}/posts`);
      const data = response["data"];
      const posts = data["posts"];
      setPosts(posts);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Link to={`/posts/${post["id"]}`} key={post["id"]}>
            {post["id"]}. {post["title"]} <br />
          </Link>
        );
      })}
    </div>
  );
}
