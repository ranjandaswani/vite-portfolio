import { useState } from "react";
import profilepic from "../assets/images/my-avatar.png";
import {
  BiChevronDown,
  BiCalendar,
  BiMailSend,
  BiLocationPlus,
} from "react-icons/bi";
import {
  FaStackOverflow,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function AsideLeft() {
  // Define a state variable to track whether the class is active
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the class
  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the boolean state
  };

  return (
    <aside className={isActive ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profilepic} alt="ranjan-daswani" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Ranjan Daswani">
            Ranjan Daswani
          </h1>
          <p className="title">Web Developer</p>
        </div>
        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleClass}
        >
          {/* <span>Show Contacts</span> */}
          <BiChevronDown color="#ffdb70" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <BiMailSend color="#ffdb70" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:ranjan.daswani@yahoo.com"
                className="contact-link"
              >
                ranjan.daswani@yahoo.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <BiCalendar color="#ffdb70" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time dateTime="">29 Years old</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <BiLocationPlus color="#ffdb70" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Hometown</p>
              <address>Indore, Madhya Pradesh, India</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://stackoverflow.com/users/9085203/ranjan"
              className="social-link"
            >
              <FaStackOverflow color="#d6d6d6b3" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/ranjandaswani" className="social-link">
              <FaGithub color="#d6d6d6b3" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/ranjan-daswani-19ab5a77/"
              className="social-link"
            >
              <FaLinkedinIn color="#d6d6d6b3" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/ranjan_daswani/?hl=en"
              className="social-link"
            >
              <FaInstagram color="#d6d6d6b3" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default AsideLeft;
