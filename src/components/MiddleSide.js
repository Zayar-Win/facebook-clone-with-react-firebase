import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import "./MiddleSide.css";
import Post from "./Post";
import PostModal from "./PostModal";
import Story from "./Story";

function MiddleSide() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ref = collection(db, "posts");
    const q = query(
      ref,
      orderBy("timestamp", "desc")
    );
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => doc.data())
      );
    });
  }, []);

  return (
    <div className='middle__side'>
      {/* story */}
      <Story />
      {/* post model box */}
      <PostModal />
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.user.displayName}
            photo={post.photo}
            timestamp={post.timestamp}
            description={post.description}
            photoURL={post.user.photoURL}
          />
        ))
      )}
    </div>
  );
}

export default MiddleSide;
