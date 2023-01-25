import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Sidebar = ({ user }) => {
  const recentItem = (key) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{key}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top--profile">
          <img
            className="sidebar__image"
            src="https://slp-statics.astockcdn.net/static_assets/staging/22fall/photos/curated-collections/card-1.jpg?width=580&format=webp"
            alt=""
          />
          <Avatar
            src={user?.photoUrl}
            // src="https://media.licdn.com/dms/image/C4E03AQFdVZZkE2x5ig/profile-displayphoto-shrink_100_100/0/1627563776110?e=1679529600&v=beta&t=uILm7TSZ8lOhPcNnMAOJDnoZHUnDmcbYf1YRpCDHfMI"
            alt={user?.displayName}
            className="sidebar__avatar"
          />
          <h2 className="sidebar__username">{user?.displayName}</h2>
          <h2 className="sidebar__description">{user?.email}</h2>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p>
            <b className="sidebar__stat--number">20</b>
          </div>
          <div className="sidebar__stat">
            <p>Impressions of your post</p>
            <b className="sidebar__stat--number">20</b>
          </div>
        </div>
        <div className="sidebar__myitems">
          <BookmarkIcon />
          <p>My Items</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("competitive programming")}
        {recentItem("software development")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("software developer")}
        {recentItem("ux designers")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
