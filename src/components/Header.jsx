import React from "react";
import logo_img from "../assets/Logo.png";
import { FaUser } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="header_job_board">
      <div>
        <img src={logo_img} alt="logo_img" />
        <span className="logo-text">Институт запусков</span>
      </div>
      <button className="login-button">
        <span className="icon">
          <FaUser size={24} style={{ backgroundColor: "transparent" }} />
        </span>
        <span className="text">
          Войти
          <ChevronDown size={24} className="arrow" />
        </span>
      </button>
    </div>
  );
};

export default Header;
