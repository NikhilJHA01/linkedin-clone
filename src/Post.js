import "./Post.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <div className="post__userdetails">
          <Avatar
            src={photoUrl}
            // src="https://media.licdn.com/dms/image/C4E03AQFdVZZkE2x5ig/profile-displayphoto-shrink_100_100/0/1627563776110?e=1679529600&v=beta&t=uILm7TSZ8lOhPcNnMAOJDnoZHUnDmcbYf1YRpCDHfMI"
            alt={name}
            className="post__avatar"
          />
          <div className="post__description">
            <div className="post__description--first">
              <h2>{name}</h2>
              <span> . 2nd</span>
            </div>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
      <div className="post__details">
        <p>{message}</p>
      </div>
      <div className="post__footer">
        <FooterOption title="Like" Icon={ThumbUpOffAltIcon} />
        <FooterOption title="Comment" Icon={InsertCommentIcon} />
        <FooterOption title="Share" Icon={ShareIcon} />
        <FooterOption title="Send" Icon={SendIcon} />
      </div>
    </div>
  );
});

const FooterOption = ({ title, Icon }) => {
  return (
    <div className="footerOption">
      {Icon && <Icon />}
      <h3>{title}</h3>
    </div>
  );
};

export default Post;
