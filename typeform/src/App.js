import React from 'react';
import './App.css';

import cart from "./assets/cart.png";
import login from "./assets/login.png";
import searchIcon from "./assets/searchIcon.png";
import sydneyOperaHouse from "./assets/sydney-opera-house.png";

function App() {
  return (
    <div className="soh-page">
        {/* header */}
        <div className="header-top">
            {/* logo*/}
            <h1 className="header-logo">
                <a href="/">
                    <img className="img-svg" src={sydneyOperaHouse} alt="Sydney Opera House" aria-hidden="true"></img>
                </a>
            </h1>
            {/* search */}
            <div className="header-search">
                <div className="search-container">
                    <input id="search" placeholder="Search for ..."></input>
                    <button className="search-button">
                        <img src={searchIcon} style={{paddingLeft: "20px"}}></img>
                    </button>
                </div>
            </div>

            {/* menu */}
            <nav className="header-menu">
              <ul>
                  <li>
                      <a href="/events.html">Events</a>
                  </li>

                  <li>
                      <a href="/visit-us.html">Visit Us</a>
                  </li>

                  <li>
                      <a href="/our-story.html">Our Story</a>
                  </li>

                  <li>
                      <a href="/give.html">Give</a>
                  </li>

                  <li>
                      <a href="/backstage.html">Backstage</a>
                  </li>

                  <li>
                      <a href="/schools.html">Schools </a>
                  </li>
              </ul>
            </nav>
            {/* login and cart */}
            <div className="header-icon header-login">
                <img src={login} ></img>
                <a href="" className="header-login login">Login</a>
            </div>

            <div className="header-icon header-shopping">
                <img src={cart} style={{mariginTop: "-3px"}} ></img>
                <a href="" className="header-login shop">Cart</a>
            </div>
        </div>
        {/* video */}
        <div className="hero">
          <div className="hero-container">
            <div style={{width: "80%"}}>
              <h1>Welcome to our House</h1>
            <p>A place to take in a spectacular horizon, then broaden your own.</p>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default App;
