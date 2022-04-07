import Image from "next/image";
import MobileMenu from "../Menu/mobileMenu.js";
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import menuOpener from "/public/assets/mobile-header-menu-opener.svg";
import menuCloser from "/public/assets/mobile-header-menu-closer.svg";

const MobileHeader = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const menuAnimation = useSpring({
      transform: menuVisible ? 'translateX(0)' : 'translateX(100%)',
      opacity: menuVisible ? 1 : 0,
    });

    return(
        <>
            <header>
                <div className="header-item logo-container">
                    <Image
                        src={logo}
                        alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                        width="40px"
                        height="40px"
                    />
                </div>
                <div className="header-item menu-container">
                    <Image
                         src={menuVisible  ? menuCloser : menuOpener}
                         alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                         width="32px"
                         height="32px"
                         onClick={() => setMenuVisible(!menuVisible)}
                    />
                </div>
            </header>
            <MobileMenu style={menuAnimation}/>

            <style jsx global>{
                `html{
                  overflow-y: ${menuVisible ? 'hidden' : 'visible'};
                }`
            }</style>

            <style jsx>{`
              .menu-container, .logo-container{
                cursor: pointer;
              }

              .main-menu-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              header{
                height: 8vh;
                display: flex;
                padding: 1rem 3rem;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              }
            `}</style>
      </>
    )
}
export default MobileHeader;
