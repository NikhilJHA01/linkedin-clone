import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { auth } from "./firebase";

const Header = ({ user }) => {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Log Out"
          user={user}
          avatar={true}
          clickEvent={logOut}
        />
      </div>
    </header>
  );
};

export default Header;
