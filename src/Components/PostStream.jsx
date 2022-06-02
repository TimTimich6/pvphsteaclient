import { useEffect, useState } from "react";
import Post from "./Post";
import cl from "./Post.module.css";
import io from "socket.io-client";
import axios from "axios";
const PostStream = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL || ""}/api/post`).then((resp) => {
      if (resp) {
        setPosts(resp.data);
      }
    });

    const socket = io(`${process.env.REACT_APP_URL || "http://localhost:3080"}`);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("post", (data) => {
      console.log("data:", data);
      if (data) {
        setPosts((prev) => [...prev, data]);
      }
    });
  }, []);
  return (
    <div className={cl.total}>
      <label className={cl.title}>Slanders</label>
      <div className={cl.stream}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => {
            return (
              <Post key={post.deletetime} time={post.deletetime} id={post.id}>
                {post.text}
              </Post>
            );
          })}
      </div>
    </div>
  );
};

export default PostStream;
