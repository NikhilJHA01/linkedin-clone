import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";

const HeaderOption = ({ title, Icon, user, avatar, clickEvent }) => {
  return (
    <div className="headerOption" onClick={clickEvent ? clickEvent : undefined}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          alt={user?.displayName}
          src={user?.photoUrl}
          // src="https://media.licdn.com/dms/image/C4E03AQFdVZZkE2x5ig/profile-displayphoto-shrink_100_100/0/1627563776110?e=1679529600&v=beta&t=uILm7TSZ8lOhPcNnMAOJDnoZHUnDmcbYf1YRpCDHfMI"
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
