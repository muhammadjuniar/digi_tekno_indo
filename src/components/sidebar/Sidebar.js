import React, { useContext } from "react";
import "./sidebar.scss";
import {
  AccountCircleOutlined,
  BarChart,
  Dashboard,
  HealthAndSafety,
  History,
  Home,
  Inventory,
  LocalShipping,
  Logout,
  Notifications,
  Person,
  RocketLaunch,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  const { dispatchAuth } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatchAuth({ type: "LOGOUT" });
        // navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digidb-55920.appspot.com/o/digi-logo.png?alt=media&token=82c7b6a6-0935-4697-9411-10cfd8ee8f10"
              alt=""
            />
            PT DIGI TEKNO
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Home className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/pegawai" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Pegawai</span>
            </li>
          </Link>
          <li onClick={() => handleLogout()}>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
