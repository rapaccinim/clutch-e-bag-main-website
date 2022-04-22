import Image from "next/image";
import MobileMenu from "../Menu/mobileMenu.js";
import React, { useState, useEffect} from 'react';
import { useSpring } from 'react-spring';
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import linkedinIcon from "/public/assets/iconmonstr-linkedin-3.svg";
import instagramIcon from "/public/assets/iconmonstr-instagram-11.svg";
import menuOpener from "/public/assets/mobile-header-menu-opener.svg";
import menuCloser from "/public/assets/mobile-header-menu-closer.svg";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuAnimation = useSpring({
      position: 'absolute',
      zIndex: 99,
      transform: menuVisible ? 'translateX(0)' : 'translateX(100%)',
      opacity: menuVisible ? 1 : 0,
    });
    return (
        <>
            <header>
              <div className="header-item logo-container">
                  <Image
                      src={logo}
                      alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                      width="70px"
                      height="70px"
                  />
              </div>
              <div className="header-item menu-container mobile icon">
                  <Image
                       src={menuVisible ? menuCloser : menuOpener}
                       alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                       width="32px"
                       height="32px"
                       onClick={() => setMenuVisible(!menuVisible)}
                  />
              </div>
              <div className="header-item main-menu-container default">
                  <nav className="main-menu">
                      <div className="main-menu-item">About</div>
                      <div className="main-menu-item">Icon Bag</div>
                      <div className="main-menu-item">Contact</div>
                 </nav>
              </div>
              <div className="header-item social-links-container default">
                <div className="social-links-item">
                     <a
                         href="https://www.instagram.com/clutch_ebag/"
                         alt="Follow Clutch-e Bag on Instagram"
                         target="_blank"
                     >
                         <Image
                             src={instagramIcon}
                             alt="Instagram icon clutch-e bag main website innovation fashion tech made in italy startup"
                         />
                     </a>
                </div>
                <div className="social-links-item">
                    <a
                       href="https://www.linkedin.com/company/15798268/admin/"
                       alt="Follow Clutch-e Bag on LinkedIn"
                       target="_blank"
                    >
                         <Image
                             src={linkedinIcon}
                             alt="Linkedin icon clutch-e bag main website innovation fashion tech made in italy startup"
                         />
                    </a>
                </div>
              </div>
           </header>
           <div className="menu-wrapper mobile">
              <MobileMenu style={menuAnimation}/>
           </div>

           <style jsx global>{
              `html{
                overflow-y: ${menuVisible ? 'hidden' : 'visible'};
              }
              @media (min-width: 768.5px) {
                html{
                  overflow-y: visible;
                }
              }`
            }</style>
            <style jsx>{`
              header{
                display: flex;
                padding: 3rem 7rem;
              }
              .logo-container{
                cursor: pointer;
              }
              .main-menu-container{
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .main-menu{
                display: flex;
              }
              .main-menu-item{
                margin: 0 40px;
              }
              .main-menu-item:hover{
                text-decoration: underline;
                cursor: pointer;
              }
              .social-links-container{
                display: flex;
                padding: 0 15px;
              }
              .social-links-item{
                display: inherit;
                cursor: pointer;
                margin: 0 0 0 1rem;
              }
              .social-links-item a{
                display: inherit;
              }
              .mobile{
                display: none;
              }
              .icon{
                cursor: pointer;
              }

              @media (max-width: 768px) {
                .mobile{
                  display: initial;
                }
                .default{
                  display: none;
                }
                header{
                  height: 8vh;
                  display: flex;
                  padding: 1rem 3rem;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                }
                .logo-container{
                  width: 40px;
                  height: 40px;
                }
              }
            `}</style>
        </>
    )
}
export default Header;
