import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import linkedinIcon from "/public/assets/iconmonstr-linkedin-3.svg";
import instagramIcon from "/public/assets/iconmonstr-instagram-11.svg";
import MainMenu from "../Menu/mainMenu";
import MobileHeader from "./mobileHeader";

const Header = () => {

    const [mobileView, setMobileView] = useState(undefined);

    const setResponsiveness = () => {
        setMobileView(window.innerWidth < 768 ? 'mobile' : 'desktop')
    };

    useEffect(() => {
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const menuItems = [
        { itemName:"Home", itemLink: "" },
        { itemName:"Philosophy", itemLink: "philosophy" },
        { itemName:"Gallery", itemLink: "gallery" },
        { itemName:"Contact", itemLink: "contact" },
    ]

    return (
        <>
            <header>
                {mobileView === 'mobile' && <MobileHeader menuItems={menuItems}/>}
                {mobileView === 'desktop' &&
                    <>
                        <div className="header-item logo-container">
                            <Link href="/">
                                <div>
                                    <Image
                                        src={logo}
                                        alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                                        width="70px"
                                        height="70px"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="header-item main-menu-container">
                            <MainMenu menuItems={menuItems}/>
                        </div>
                        <div className="header-item social-links-container">
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
                                    href="https://www.linkedin.com/company/clutchebag"
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
              .icon{
                cursor: pointer;
              }

              @media (max-width: 768px) {
                header{
                  padding: 1rem 2rem;
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
