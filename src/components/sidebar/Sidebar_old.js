import React, { useContext } from "react";
import "./sidebar.scss";
import {
  AccountCircleOutlined,
  BarChart,
  Dashboard,
  HealthAndSafety,
  History,
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
          <span className="logo">PT DIGI TEKNO</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Inventory className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <RocketLaunch className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafety className="icon" />
            <span>Sistem Health</span>
          </li>
          <li>
            <History className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={() => handleLogout()}>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
