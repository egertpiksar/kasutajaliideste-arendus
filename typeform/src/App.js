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

import instagram from "./assets/instagram.png";

function openNav(){
  const sidebar = document.querySelector(".right-sidebar");
  sidebar.classList.toggle("is-active");

  const overlay = document.querySelector(".right-sidebar-overlay");
  overlay.classList.toggle("is-active");
}

function closeNav(){
  if (openNav()){
    this.overlay.removeClass("is-active");
    this.sidebar.removeClass("is-active");
  }
}


function App() {
  return (
    <div className="soh-page">
        <div className="right-sidebar-overlay"></div>
        <div className="right-sidebar">
          <div className="close-sidebar">
              <div className="close-sidebar-btn" onClick={ () => closeNav()}>
                X
              </div>
            </div>

          <nav>            
            <ul>
              <li>
                <a href="/digital.html">Digital</a>
              </li>

              <li>
                <a href="/give.html">Give</a>
              </li>

              <li>
                <a href="/events.html">Events</a>
              </li>

              <li>
                <a href="/events.html">Visit Us</a>
              </li>

              <li>
                <a href="/our-story.html">Our Story</a>
              </li>
              
              <li>
                 <a href="/schools.html">Schools </a>
              </li>

              <li>
                  <a href="/account.html">Account</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* header */}
        <div className="header-top">
            {/* logo*/}
            <div className="header-logo">
                <a href="/">
                    <img className="img-svg" src={sydneyOperaHouse} alt="Sydney Opera House" aria-hidden="true"></img>
                </a>
            </div>
            {/* search */}
            <div className="header-search">
                <div className="search-container">
                    <input id="search" placeholder="Search for ..."></input>
                    <button className="search-button">
                        <img src={searchIcon} alt="img" style={{paddingLeft: "20px"}}></img>
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

            <div className="hamburger" onClick={ () => openNav()}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            {/* login and cart */}
            <div className="header-icon header-login">
                <img src={login} alt="img"></img>
                <a href="/" className="header-login login">Login</a>
            </div>

            <div className="header-icon header-shopping">
                <img src={cart} style={{mariginTop: "-3px"}} alt="img" ></img>
                <a href="/" className="header-login shop">Cart</a>
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
              <p style={{marginTop: "50px", position: "relative"}}><span className="btn btn-secondary btn-lg">
                  READ UPDATE
              </span></p>
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
                    <p style={{marginTop: "50px", position: "relative"}}><span className="btn btn-secondary btn-lg">
                  SIGN UP
                </span></p>
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
                    <img src={aco} alt="pilt" className="aco" height={75} width={255}></img>
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
                    <img src={tab} alt="pilt" className="tab" height={100} width={255}></img>
                  </div>

                  <div className="item" >
                    <img src={spc} className="spc" height={61} width={255} alt="pilt"></img>
                  </div>
              </div>
            </div>
        </div>

        <div className="white-information">
            <div className="information-container">
              <h3 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "600", color: "black", paddingTop: "60px", paddingBottom: "60px"}}>
                      The Sydney Opera House thanks its family of <a href="/" style={{color: "#333", textDecoration: "underline"}}>Corporate Partners</a> for their support
                  </h3>
            </div>
        </div>

        <div className="footer">
          <div className="footer-container">
            <div className="col column1">
                <ul>
                  <li>
                    {/* copied */}
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="img-svg replaced-svg" style={{width: "30px", height: "30px"}} aria-hidden="true" focusable="false">
                      <path id="_Compound_Path_" data-name="Compound Path" d="M36.86 49.82h-9.8V32.24h9.8V20.93c0-8.11 3.85-20.81 20.8-20.81h15.28v17H61.86c-1.81 0-4.37.9-4.37 4.77v10.3h15.72L71.4 49.82H57.49v49.61H36.86z"></path>
                      </svg>
                  </li>

                  <li>
                    {/* copied */}
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="img-svg replaced-svg" style={{width: "30px", height: "30px"}} aria-hidden="true" focusable="false">   
                        <path id="_Compound_Path_" data-name="Compound Path" d="M5.13 81.61a41.13 41.13 0 0 0 25.46-8.77A20.53 20.53 0 0 1 11.44 58.6a20.35 20.35 0 0 0 9.25-.35A20.53 20.53 0 0 1 4.26 38.13v-.25a20.39 20.39 0 0 0 9.29 2.53A20.53 20.53 0 0 1 7.23 13a58.14 58.14 0 0 0 42.22 21.49A20.51 20.51 0 0 1 84.33 15.8a41 41 0 0 0 13-5 20.58 20.58 0 0 1-9 11.38A40.84 40.84 0 0 0 100.1 19a41.58 41.58 0 0 1-10.23 10.59v2.65c0 27.1-20.63 58.34-58.34 58.34A58.06 58.06 0 0 1 .1 81.37a43.26 43.26 0 0 0 5.03.24z">
                        </path>
                      </svg>
                  </li>

                  <li>
                    {/* copied */}
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="img-svg replaced-svg" style={{width: "30px", height: "30px"}} aria-hidden="true" focusable="false">
                          <path id="_Compound_Path_" data-name="Compound Path" d="M79 72.44h-4.51v-2.52a3.79 3.79 0 0 1 .51-2.28 2 2 0 0 1 1.73-.7 2 2 0 0 1 1.68.7 3.79 3.79 0 0 1 .59 2.28zM59.61 84.8a1.66 1.66 0 0 0 1.39-.54 2.8 2.8 0 0 0 .4-1.75V69.43a3 3 0 0 0-.53-1.95 2 2 0 0 0-1.57-.66 2.53 2.53 0 0 0-1.08.24 3.79 3.79 0 0 0-1 .77v15.8a4.43 4.43 0 0 0 1.26.9 2.92 2.92 0 0 0 1.13.27zm-33-45.94H33V23.2l7.45-22.12h-6.51L30 16.2h-.4L25.4 1.08h-6.46l7.59 22.77v15zM0 80.6V66a18.26 18.26 0 0 1 18.25-18.28h63.49A18.28 18.28 0 0 1 100 66v14.6a18.28 18.28 0 0 1-18.24 18.32H18.25A18.26 18.26 0 0 1 0 80.64zm69.29.66A8.07 8.07 0 0 0 71.25 87a7 7 0 0 0 5.31 2.12 7.59 7.59 0 0 0 5.68-1.95 8.11 8.11 0 0 0 1.91-5.88V80H79v1.15a5.49 5.49 0 0 1-.51 2.88 2.09 2.09 0 0 1-1.76.66A1.9 1.9 0 0 1 75 84a5.55 5.55 0 0 1-.49-2.78v-4.83h9.66v-6.46a7.59 7.59 0 0 0-1.87-5.51 7.11 7.11 0 0 0-5.34-1.92 7.59 7.59 0 0 0-5.54 2.07 7.12 7.12 0 0 0-2.15 5.36v11.38zM52.1 88.39h5.06V86.5a6.48 6.48 0 0 0 2.19 1.69 6 6 0 0 0 2.64.54 4.2 4.2 0 0 0 3.44-1.43 6.32 6.32 0 0 0 1.19-4.12v-14a7.59 7.59 0 0 0-1.26-4.73 4.36 4.36 0 0 0-3.67-1.61 5.06 5.06 0 0 0-2.34.59 8 8 0 0 0-2.16 1.76V54.13h-5.06v34.3zm-18.28-4.11a5.45 5.45 0 0 0 .89 3.39 3.15 3.15 0 0 0 2.64 1.14 6.11 6.11 0 0 0 2.94-.81 10.75 10.75 0 0 0 2.92-2.34v2.78h5.06V63.15h-5.06v19.22a7 7 0 0 1-1.57 1.37 2.86 2.86 0 0 1-1.4.53 1.26 1.26 0 0 1-1-.4 2.16 2.16 0 0 1-.32-1.26V63.12h-5.1zM14.09 59.1H20v29.33h5.7V59.1h5.9v-5H14.09zm29.09-21.63a7.4 7.4 0 0 1-2.24-5.65V17.36a6.32 6.32 0 0 1 2.29-5.16 9.36 9.36 0 0 1 6.19-1.92 8.39 8.39 0 0 1 5.78 2 6.7 6.7 0 0 1 2.25 5.21v14.45a7.27 7.27 0 0 1-2.21 5.65 8.7 8.7 0 0 1-6.11 2 8.39 8.39 0 0 1-6-2.15zm3.62-5.12a2.43 2.43 0 0 0 .61 1.77 2.24 2.24 0 0 0 1.73.63 2.53 2.53 0 0 0 1.86-.64 2.3 2.3 0 0 0 .7-1.77V17.16a1.83 1.83 0 0 0-.7-1.48 2.85 2.85 0 0 0-1.83-.56 2.53 2.53 0 0 0-1.69.56 1.9 1.9 0 0 0-.65 1.48v15.18zm19.28 6.94a7.21 7.21 0 0 0 3.3-.9 12.07 12.07 0 0 0 3.28-2.61v3.07h5.7V11h-5.73v21.17a7.89 7.89 0 0 1-1.75 1.49 3.31 3.31 0 0 1-1.59.58 1.39 1.39 0 0 1-1.18-.44 2.3 2.3 0 0 1-.4-1.42V11H62v23.31A5.83 5.83 0 0 0 63 38a3.58 3.58 0 0 0 3 1.26z">
                          </path>
                      </svg>
                  </li>

                  <li>
                      <img src={instagram} alt="instagram"></img>
                  </li>

                  <li>
                    {/* copied */}
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="img-svg replaced-svg" style={{width: "30px", height: "30px"}} aria-hidden="true" focusable="false">
                        <defs>
                           <style></style>
                        </defs>
                        <g id="_Group_" data-name="<Group>">
                            <path id="_Compound_Path_" data-name="<Compound Path>" d="M61.28 21.3a53.7 53.7 0 0 1 8.23 1.93 56.36 56.36 0 0 1 13.34 6.08 2 2 0 0 0 1 .3h14.74c.4 0 .79 0 1.18.06v.16c-.23.36-.46.7-.69 1.06a30.06 30.06 0 0 0-3.93 8.19.94.94 0 0 0 .1.89 24.44 24.44 0 0 1 3.94 20.61 24.37 24.37 0 0 1-11 15.21 24.72 24.72 0 0 1-13.34 3.82 23.33 23.33 0 0 1-6-.77 25.13 25.13 0 0 1-12.25-7.23c-.45-.48-.87-1-1.34-1.51l-5.35 8-5.27-7.87a1.2 1.2 0 0 0-.18.1l-.1.11a24.81 24.81 0 0 1-15.52 8.79 24.17 24.17 0 0 1-10.34-.58A25.1 25.1 0 0 1 .33 58.31a24.16 24.16 0 0 1 .45-9.9 25.17 25.17 0 0 1 3.9-8.47 1 1 0 0 0 .11-.73 27.94 27.94 0 0 0-3.51-7.55C.9 31.06.45 30.5 0 29.92v-.2h15.36a1.28 1.28 0 0 0 .65-.21 54.25 54.25 0 0 1 11.25-5.46A61.26 61.26 0 0 1 36 21.71a69.34 69.34 0 0 1 8.68-1.14 73.86 73.86 0 0 1 16.6.74zM55 54.51a20 20 0 1 0 19.51-19.88A20 20 0 0 0 55 54.51zM25 34.55a19.93 19.93 0 1 0 20 20 20 20 0 0 0-20-20zm1-5.21a25.46 25.46 0 0 1 24 21.77 25.36 25.36 0 0 1 23.6-21.65 56.66 56.66 0 0 0-22.24-4.63A61.55 61.55 0 0 0 26 29.35zm0 0">
                            </path>
                        </g>
                        <path id="_Compound_Path_2" data-name="<Compound Path>" d="M74.9 41.91a12.36 12.36 0 1 1-12.4 12.35 12.32 12.32 0 0 1 12.4-12.35zM83 54.26a8.08 8.08 0 1 0-8.08 8.08A8.07 8.07 0 0 0 83 54.26zm0 0">
                        </path>
                        <path id="_Compound_Path_3" data-name="<Compound Path>" d="M24.78 41.91a12.36 12.36 0 1 1-12.41 12.34 12.31 12.31 0 0 1 12.41-12.34zm8.05 12.32a8.09 8.09 0 1 0-8.07 8.11 8.08 8.08 0 0 0 8.07-8.11zm0 0">
                        </path>
                        <path id="_Compound_Path_4" data-name="<Compound Path>" d="M74.9 50.16a4.1 4.1 0 1 1-4.1 4.14 4.11 4.11 0 0 1 4.11-4.14zm0 0">
                        </path>
                        <path id="_Compound_Path_5" data-name="<Compound Path>" d="M24.75 50.13a4.13 4.13 0 1 1 0 8.27 4.13 4.13 0 1 1 0-8.27zm0 0"></path>
                    </svg>
                  </li>

                  <li>
                      {/* copied */}
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="img-svg replaced-svg" style={{width: "30px", height: "30px"}} aria-hidden="true" focusable="false">
                          <path d="M73.44 50.12c-1.37-.42-2.31-.71-1.6-2.54 1.56-4 1.72-7.42 0-9.87-3.16-4.6-11.82-4.35-21.74-.12 0 0-3.12 1.39-2.32-1.13 1.53-5 1.29-9.17-1.08-11.59-5.38-5.48-19.69.21-32 12.7C5.59 46.92.26 56.84.26 65.41c0 16.4 20.66 27.37 40.87 27.37 26.5 0 44.13-16.67 44.13-29.11 0-7.52-6.26-11.79-11.82-13.55zM41.18 85.43C25.05 87 11.13 79.7 10.08 69s11.19-20.53 27.31-22.13 30.06 5.73 31.1 16.37-11.17 20.58-27.31 22.19zm58.58-48.66a30 30 0 0 0-30-30 3.5 3.5 0 0 0 0 7 23 23 0 0 1 23 23 3.5 3.5 0 0 0 7 0zm-13.91-.51a20 20 0 0 0-15.57-15.57 3.5 3.5 0 0 0-1.41 6.86A13 13 0 0 1 79 37.66a3.5 3.5 0 0 0 6.86-1.41zm-52.94 21C26.41 58.6 22 64 23.12 69.46s7.24 8.75 13.74 7.44 10.88-6.75 9.79-12.17-7.24-8.73-13.74-7.44z" id="_Group_" data-name="<Group>"></path>
                      </svg>
                  </li>
                </ul>
            </div>

            <div className="col column2">
              <ul>
                <li><a href="/">Give</a></li>
                <li><a href="/">Insider Membership</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Prizes & Scholarships</a></li>
                <li><a href="/">Travel Trade</a></li>

                <li><a href="/">Careers</a></li>
                <li><a href="/">Newsletter</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Gift Vouchers</a></li>
                <li><a href="/">Media</a></li>
                <li><a href="/">Venue Hire</a></li>

                <li><a href="/">Accessibility</a></li>
                <li><a href="/">Feedback</a></li>
                <li><a href="/">First Nations</a></li>


              </ul>
            </div>

            <div className="col column3">
                <a href="/" style={{fontWeight: "bold"}}>Sitemap</a>
                <ul>
                  <li><a href="/" style={{color: "#646565"}}>Website Terms of Use</a></li>
                  <li><a href="/" style={{color: "#646565"}}>Privacy</a></li>
                </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
