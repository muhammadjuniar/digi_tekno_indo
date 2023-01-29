import { Person, Key } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatchAuth({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="left">
          <div className="wrapper">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digidb-55920.appspot.com/o/digi-logo.png?alt=media&token=82c7b6a6-0935-4697-9411-10cfd8ee8f10"
              alt=""
            />
            <span className="title">PT DIGI TEKNO</span>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleLogin}>
            <div className="loginInput">
              <Person className="icon" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginInput">
              <Key className="icon" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            {error && <span>Wrong Email or Password!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
