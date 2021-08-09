import React from "react";

import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.replace("/login");
    window.location.reload();
  };

  return (
    <div>
      <header>
        <div class="custom_container">
          <div class="header_bar">
            <div class="logo">
              <Link to="/">Pick Up</Link>
            </div>
            <button class="nav_btn open_close_nav" type="button">
              <i class="fas fa-bars"></i>
            </button>
            <div class="nav_bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About us</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Career">Career</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/Help">Help Center</Link>
                </li>
                <li>
                  {/* <Link to="/account">Profile</Link> */}
                  {!user && <Link to="/login">Login</Link>}
                  {user && <Link to="/booking">Booking</Link>}
                </li>
                {user && (
                  <li>
                    <span style={{ cursor: "pointer" }} onClick={handleLogout}>
                      Logout
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div class="call_us">
              <span>
                <i class="fas fa-phone-volume"></i>
              </span>
              <small>Call Now:</small>
              <a href="#1">823</a>
            </div>
          </div>
        </div>
      </header>

      <section class="responsive_nav_bar">
        <div class="cancle_nav">
          <a class="open_close_nav" href="#1">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="responsive_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Career">Career</Link>
            </li>
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>
              <Link to="/Help">Help Center</Link>
            </li>
            <li>
              <Link to="/mybooking">My Booking</Link>
            </li>
          </ul>
        </div>
        <div class="responsive_call_us">
          <span>
            <i class="fas fa-phone-volume"></i>
          </span>
          <small>Call Now:</small>
          <a href="#1">823</a>
        </div>
      </section>
    </div>
  );
}
