import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectedUser } from "./features/userSlice";
import Feeds from "./Feeds";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // log in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // log out
      }
    });
  }, []);

  return (
    <div className="app">
      {user && <Header user={user} />}
      {!user ? (
        <Login />
      ) : (
        <main className="app__body">
          <Sidebar user={user} />
          <Feeds user={user} />
          <Widgets />
        </main>
      )}
    </div>
  );
}

export default App;
