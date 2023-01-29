import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div>
          {/* <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" /> */}
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://cdn.shopify.com/s/files/1/0291/2429/6782/files/Licorne_Pixel_Art_Dab_large.png?v=1589475723"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
