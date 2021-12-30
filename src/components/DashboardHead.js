import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../components/Navbar";
import { AiOutlineBell } from "react-icons/ai";
import "../style/DashboardHead.css";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

function DashboardHead() {
  const openNavbar = () => {
    document.querySelector(".navbar").classList.add("responsive-navbar");
  };
  return (
    <div className="dash-board">
      <div className="dash-head">
        <div className="icon-container">
          <AiOutlineMenu
            onClick={openNavbar}
            className="dashBoard-Hamburger-menu"
          />
        </div>
        <h1 style={{ fontSize: "25px" }}>Dashboard</h1>
      </div>
      <div className="dash-icons">
        <BsSearch className="curson-pointer" size={23} />
        <AiOutlineBell className="curson-pointer" size={24} />
        <div className="profile-pic">
          <CgProfile className="curson-pointer" size={33} />
          <MdKeyboardArrowDown className="curson-pointer" size={25} />
        </div>
      </div>
    </div>
  );
}
export default DashboardHead;
