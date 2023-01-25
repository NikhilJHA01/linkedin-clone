import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
const Widgets = () => {
  const newsList = [
    {
      title: "Luxury real estate booming in India",
      duration: "10h ago",
      readers: "1234",
    },
    {
      title: "Luxury real estate booming in India",
      duration: "10h ago",
      readers: "1234",
    },
    {
      title: "Luxury real estate booming in India",
      duration: "10h ago",
      readers: "1234",
    },
    {
      title: "Luxury real estate booming in India",
      duration: "10h ago",
      readers: "1234",
    },
    {
      title: "Luxury real estate booming in India",
      duration: "10h ago",
      readers: "1234",
    },
  ];
  return (
    <div className="widgets">
      <div className="widgets__title">
        <p>Linkedin News</p>
        <InfoIcon />
      </div>
      <div className="widgets__list">
        <ul>
          {newsList.map((news) => {
            return (
              <div className="widgets__list--news">
                <li>{news.title}</li>
                <div className="widgets__list--viewers">
                  <span>{news.duration}</span>
                  {" . "} <span>{news.readers} readers</span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Widgets;
