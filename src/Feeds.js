import Post from "./Post";
import "./Feeds.css";
import CreatePost from "./CreatePost";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

const Feeds = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const addPost = (message) => {
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feeds">
      <CreatePost user={user} addPost={addPost} />
      <div>
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feeds;
