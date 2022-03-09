import Image from "next/image";
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import linkedinIcon from "/public/assets/iconmonstr-linkedin-3.svg"

const Header = () => {
    return(
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
                <div className="header-item main-menu-container">
                    <nav className="main-menu">
                        <div className="main-menu-item">About</div>
                        <div className="main-menu-item">Icon Bag</div>
                        <div className="main-menu-item">Contact</div>
                    </nav>
                </div>
                <div className="header-item social-links-container">
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
              }
              .social-links-item a{
                display: inherit;
              }
            `}</style>
        </>
    )
}
export default Header;