import "./CreatePost.css";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
const CreatePost = ({ addPost, user }) => {
  const [postMessage, setPostMessage] = useState("");
  const changeInput = (value) => {
    setPostMessage(value);
  };
  const sendPost = (e) => {
    e.preventDefault();
    if (postMessage) addPost(postMessage);
    setPostMessage("");
  };

  return (
    <div className="createpost">
      <div className="createpost__search">
        <Avatar
          src={user?.photoUrl}
          // src="https://media.licdn.com/dms/image/C4E03AQFdVZZkE2x5ig/profile-displayphoto-shrink_100_100/0/1627563776110?e=1679529600&v=beta&t=uILm7TSZ8lOhPcNnMAOJDnoZHUnDmcbYf1YRpCDHfMI"
          alt={user?.displayName}
        />
        <form onSubmit={(e) => sendPost(e)}>
          <input
            type="text"
            value={postMessage}
            placeholder="Start a post"
            onChange={(e) => changeInput(e.target.value)}
          />
        </form>
      </div>
      <div className="createpost__attachments">
        <div className="createpost__attachment">
          <ImageIcon className="photo" />
          <span>Photo</span>
        </div>
        <div className="createpost__attachment">
          <SmartDisplayIcon className="video" />
          <span>Video</span>
        </div>
        <div className="createpost__attachment">
          <EventNoteIcon className="event" />
          <span>Event</span>
        </div>
        <div className="createpost__attachment">
          <ArticleIcon className="article" />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
