import React from 'react';
import './App.css';

import cart from "./assets/cart.png";
import login from "./assets/login.png";
import searchIcon from "./assets/searchIcon.png";
import sydneyOperaHouse from "./assets/sydney-opera-house.png";
import newsLetter from "./assets/newsletter.png";
import aco from "./assets/aco.png";
import bangarra from "./assets/bangarra.png";
import bell from "./assets/bellShakespeare.png";
import sso from "./assets/sso.png";

import spc from "./assets/spc-logo.png";
import tab from "./assets/tab.png";
import stc from "./assets/STC.png";
import opera from "./assets/OperaAustralia.png";


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
        
        <div className="information">
            <div className="information-container">
              <h1 style={{fontWeight: "600"}}>COVID-19 Novel Coronavirus information</h1>
              <h3 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "600"}}>Nothing is more important to us than the health and safety of our artists, audiences, visitors and our valued staff</h3>
              <p style={{marginTop: "50px", position: "relative"}}><a><span className="btn btn-secondary btn-lg">
                  READ UPDATE
              </span></a></p>
            </div>
        </div>

        <div className="news">
            <div className="news-container">
                <div className="left-container">
                  <img src={newsLetter} alt="newsletter" height="284" width="380"></img>
                </div>
                <div className="right-container">
                    <h2 style={{fontSize: "3.5rem", fontWeight: "600"}}>Sign up to our newsletter</h2>
                    <ul style={{margin: "2.5rem 1.5rem", fontWeight: "600"}}>
                      <li>Exclusive pre-sale access to events</li>
                      <li>Special offers on a range of events and experiences</li>
                      <li>The latest news and stories from Backstage and beyond</li>                  
                    </ul>
                    <p style={{marginTop: "50px", position: "relative"}}><a><span className="btn btn-secondary btn-lg">
                  SIGN UP
                </span></a></p>
                </div>
            </div>
        </div>

        <div className="black-information">
          <div className="information-container">
                <h3 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "600", color: "white", paddingTop: "60px", paddingBottom: "60px"}}>
                    The Sydney Opera House honours our First Nation by fostering a shared sense of belonging for all Australians,
                     and we acknowledge the Gadigal people,
                     traditional custodians of Tubowgule,
                     the land on which the Opera House stands
                </h3>
            </div>
        </div>

        <div className="proud-home">
            <div className="information-container">
              <h3 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "600", color: "black", paddingTop: "60px", paddingBottom: "60px"}}>
                  The Sydney Opera House is proud home to:
              </h3>
              <div className="row1">
                  <div className="item">
                    <img src={aco} alt="pilt" height={75} width={255}></img>
                  </div> 
                  <div className="item">
                  <img src={bangarra} alt="pilt"></img>
                  </div>
                  <div className="item">
                  <img src={bell} alt="pilt"></img>
                  </div>
                  <div className="item">
                    <img src={sso} alt="pilt"></img>
                  </div>
              </div>
              <div className="row2">
                  <div className="item">
                    <img src={opera} alt="pilt"></img>
                  </div> 

                  <div className="item">
                    <img src={stc} alt="pilt"></img>
                  </div>

                  <div className="item" >
                    <img src={tab} alt="pilt" height={100} width={255}></img>
                  </div>

                  <div className="item" >
                    <img src={spc} height={61} width={255} alt="pilt"></img>
                  </div>
              </div>
            </div>
        </div>

        <div className="white-information">
            <div className="information-container">
              <h3 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "600", color: "black", paddingTop: "60px", paddingBottom: "60px"}}>
                      The Sydney Opera House thanks its family of <a style={{color: "#333", textDecoration: "underline"}}>Corporate Partners</a> for their support
                  </h3>
            </div>
        </div>

        <div className="footer">
            <div className="column1">

            </div>
            <div className="column2">
              
            </div>
            <div className="column3">
              
            </div>
        </div>
    </div>
  );
}

export default App;
