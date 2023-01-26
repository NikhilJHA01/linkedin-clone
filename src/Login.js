import "./Login.css";
import { useState, useEffect, useRef } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, login, loading } from "./features/userSlice";
import Loader from "./Loader";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [fullname, setFullname] = useState("");
  const [profilPic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const loader = useSelector(isLoading);
  const timer = useRef(null);
  useEffect(() => {
    if (error) {
      timer.current = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(timer.current);
  }, [error]);

  const logIn = () => {
    if (email && password)
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          resetForm();

          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          );
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => dispatch(loading(false)));
  };
  const signUp = () => {
    if (!fullname) return alert("Please enter a full name");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullname,
            photoURL: profilPic,
          })
          .then(() => {
            resetForm();
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fullname,
                photoUrl: profilPic,
              })
            );
          })
          .catch((error) => {
            console.log(error);
            setError(error.code);
          })
          .finally(() => dispatch(loading(false)));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => dispatch(loading(false)));
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loading(true));
    if (register) signUp();
    else logIn();
    // resetForm();
  };
  const resetForm = () => {
    setFullname("");
    setProfilePic("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {error && (
        <Alert className="alert" severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      {!loader ? (
        <div className="login">
          <div className="login__header">
            <h1>Linked</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />
          </div>
          <div className="login__form">
            <form onSubmit={(e) => submitForm(e)}>
              {register && (
                <input
                  type="text"
                  value={fullname}
                  placeholder="Full Name ( Required )"
                  onChange={(e) => setFullname(e.target.value)}
                />
              )}
              {register && (
                <input
                  type="text"
                  value={profilPic}
                  placeholder="Profile pic ( Optional )"
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              )}
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">
                {" "}
                {!register ? "Sign In" : "Sign up"}
              </button>
            </form>
          </div>
          <div className="login__footer">
            <span>
              {register ? "Already a member" : "Not a member"}?{" "}
              <a onClick={() => setRegister(!register)}>
                {register ? "Sign In" : "Register here"}
              </a>
            </span>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Login;
