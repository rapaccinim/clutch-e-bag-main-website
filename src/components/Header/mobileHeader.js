import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import React, {useState} from "react";
import menuCloser from "../../../public/assets/mobile-header-menu-closer.svg";
import menuOpener from "../../../public/assets/mobile-header-menu-opener.svg";

const MobileHeader = ({menuItems}) => {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
            <div className={"mobile-header-container"}>
                <div className="mobile-header-item logo-container">
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
                <div className="mobile-header-item mobile-menu-icon">
                    <Image
                        src={menuVisible ? menuCloser : menuOpener}
                        alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                        width="32px"
                        height="32px"
                        onClick={handleMenuClick}
                    />
                </div>
            </div>
            {menuVisible &&
                <div className='menu-container'>
                    <nav className='menu-list'>
                        {menuItems.map((item) =>
                            <div onClick={handleMenuClick} key={item.itemName}>
                                <Link href={"/" + item.itemLink}>
                                    <p className='menu-list-item'>{item.itemName}</p>
                                </Link>
                            </div>)}
                    </nav>
                </div>
            }
            <style jsx global>{`
            //https://stackoverflow.com/questions/3047337/does-overflowhidden-applied-to-body-work-on-iphone-safari
            html, body{
              position: ${menuVisible ? 'relative' : 'static'};
              overflow-y: ${menuVisible ? 'hidden' : 'visible'};
              height: 100%;
            }
            body{
              touch-action: ${menuVisible ? 'none' : 'auto'};
              -ms-touch-action: ${menuVisible ? 'none' : 'auto'};
            }
            `}</style>
            <style jsx>{`
              .mobile-header-container{
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 25px 0 0 0;
              }
              .mobile-header-item{
                display: flex;
                cursor:pointer;
              }
              .mobile-menu-icon{
                margin-left: auto;
              }
              .menu-container{
              position: absolute;
              top: 0;
              left: 0;
              z-index: 99;
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
              top: 10vh;
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
            `}</style>
        </>
    )
}
export default MobileHeader
