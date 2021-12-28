import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineTeam, AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';
import { BiTask } from 'react-icons/bi';
import { VscGraphLine } from 'react-icons/vsc';
import { FiSettings } from 'react-icons/fi';
import { BsBoxArrowInRight } from "react-icons/bs";

import 'D:/project web/bugbase project/your-project-name/src/style/Navbar.css'

function Navbar() {
    const closeNavbar = () => {
        document.querySelector('.navbar').classList.remove("responsive-navbar");
    }
    return (
        <>
            <div className={`navbar`}>

                <AiOutlineClose size={23} onClick={closeNavbar} className="navbar-Hamburger-menu" />
                <div className="heading">

                    <h1>B.</h1>
                </div>
                <ul className="navbar-items">
                    <li className="items" style={{ backgroundColor: "#d3d8f7", borderLeft: "5px solid #3954FF", color: "#3954FF" }}>
                        <AiOutlineHome />
                        <Link to={'/'} className="navbar-items-link">
                            <span className="nav-items-text" style={{ color: "#3954FF" }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="items">
                        <AiOutlineTeam />
                        <Link to={'/'} className="navbar-items-link">
                            <span className="nav-items-text">My Team</span>
                        </Link>
                    </li>
                    <li className="items">
                        <BiTask />
                        <Link to={'/'} className="navbar-items-link">
                            <span className="nav-items-text">Task</span>
                        </Link>
                    </li>
                    <li className="items">
                        <AiOutlineCalendar />
                        <Link to={'/'} className="navbar-items-link">
                            <span className="nav-items-text">Calender</span>
                        </Link>
                    </li>
                    <li className="items">
                        <VscGraphLine />
                        <Link to={'/'} className="navbar-items-link">
                            <span className="nav-items-text">Report</span>
                        </Link>
                    </li>
                    <li className="items">
                        <FiSettings />
                        <Link to={'/'} className="navbar-items-link" >
                            <span className="nav-items-text">Settings</span>
                        </Link>
                    </li>
                </ul>
                <button className='logOut-btn'>
                    <BsBoxArrowInRight size={20}/>
                    <p style={{fontSize:"15px"}}>LogOut</p>
                </button>
            </div>
        </>
    )
}
export default Navbar;
