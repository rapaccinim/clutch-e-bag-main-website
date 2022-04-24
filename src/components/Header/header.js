import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import linkedinIcon from "/public/assets/iconmonstr-linkedin-3.svg";
import instagramIcon from "/public/assets/iconmonstr-instagram-11.svg";
import menuOpener from "/public/assets/mobile-header-menu-opener.svg";
import menuCloser from "/public/assets/mobile-header-menu-closer.svg";
import MainMenu from "../Menu/mainMenu";
import MobileHeader from "./mobileHeader";

const Header = () => {

    const [mobileView, setMobileView] = useState(false);
    const setResponsiveness = () => {
        setMobileView(window.innerWidth < 768)
    };

    useEffect(() => {
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const [menuVisible, setMenuVisible] = useState(false);

    const menuItems = [
        { itemName:"About", itemLink: "about" },
        { itemName:"Icon Bag", itemLink: "icon-bag" },
        { itemName:"Contact", itemLink: "contact" },
    ]
    return (
        <>
            <header>
                {mobileView
                    ?
                    <MobileHeader/>
                    :
                    <>
                        <Link href="/">
                            <div className="header-item logo-container">
                                <Image
                                    src={logo}
                                    alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                                    width="70px"
                                    height="70px"
                                />
                            </div>
                        </Link>
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
                            <MainMenu menuItems={menuItems}/>
                        </div>
                        <div className="header-item social-links-container default">
                            <div className="social-links-item">
                                <a
                                    href="https://www.instagram.com/clutch_ebag/"
                                    title="Follow Clutch-e Bag on Instagram"
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
                                    title="Follow Clutch-e Bag on LinkedIn"
                                    target="_blank"
                                >
                                    <Image
                                        src={linkedinIcon}
                                        alt="Linkedin icon clutch-e bag main website innovation fashion tech made in italy startup"
                                    />
                                </a>
                            </div>
                        </div>
                    </>
                }
           </header>
            {/*{menuVisible && <div className="menu-wrapper mobile">*/}
            {/*    <div className='menu-container'>*/}
            {/*        <nav className='menu-list'>*/}
            {/*            {menuItems.map((item, i) =>*/}
            {/*                <Link href={"/" + item.itemLink} key={i} onClick={() => setMenuVisible(!menuVisible)}>*/}
            {/*                    <p className='menu-list-item'>{item.itemName}</p>*/}
            {/*                </Link>)}*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</div>}*/}
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
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 3rem 7rem;
                height: 8vh;
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
                position: absolute;
                z-index: 99;
              }
              .icon{
                cursor: pointer;
              }

            .menu-list-item{
              font-weight: 300;
              font-size: 1rem;
              line-height: 3.5rem;
              letter-spacing: 0.1rem;
              display: inline-block;
              position: relative;
              color: #fff;
              cursor: pointer;
            }
            .menu-list{
              top: 0;
              height: 100vh;
              width: 100vw;
              margin-bottom: 3rem;
              position: fixed;
              background-color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

              @media (max-width: 768px) {
                .mobile{
                  display: initial;
                }
                .default{
                  display: none;
                }
                header{
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
