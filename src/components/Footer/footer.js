import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/black-and-white-clutch-e-bag-fashion-tech-logo.svg";
import SocialItems from "./socialItems";

const Footer = () => {
    const menuItems = [
        { itemName:"Home", itemLink: "" },
        { itemName:"Philosophy", itemLink: "philosophy" },
    ]
    const supportItems = [
        { itemName:"Contact", itemLink: "contact" },
        { itemName:"Privacy Policy", itemLink: "https://www.iubenda.com/privacy-policy/99081748" },
        { itemName:"Cookie Policy", itemLink: "https://www.iubenda.com/privacy-policy/99081748/cookie-policy" },
    ]

    return(
        <>
            <footer>
                 <div className="container">
                  <div className="logo-container">
                    <Link href="/">
                        <div>
                            <Image
                                src={logo}
                                alt="Homepage clutch-e bag main logo innovation fashion tech made in italy startup"
                                width="70px"
                                height="70px"
                                style={{cursor: "pointer"}}
                            />
                        </div>
                    </Link>
                  </div>
                  <div className="central-container">
                    <div className="menu-container">
                      <div className="main-menu-item title">Menu</div>
                      {menuItems.map((item, i) =>
                        <Link href={"/" + item.itemLink} key={i}>
                            <div className="main-menu-item">{item.itemName}</div>
                        </Link>)}
                    </div>
                    <div className="support-container">
                      <div className="main-menu-item title">Support</div>
                      {supportItems.map((item, i) =>
                        <Link href={item.itemLink} key={i}>
                            <div className="main-menu-item">{item.itemName}</div>
                        </Link>)}
                   </div>
                  </div>
                     <SocialItems/>
                </div>
                <div className="footer-bottom">
                  <div>© 2022 Clutch-e Bag</div>
                  <div>Made with ♥️ in Italy</div>
                </div>
            </footer>
            <style jsx>{`
              footer{
                border-top: 0.5px solid;
              }
              .container{
                display: flex;
                align-items: start;
                flex-direction: row;
                padding: 5rem;
                justify-content: space-between;
                width: 80%;
              }

              .title{
                font-family: Antic Didone, sans-serif;
                font-size: 20px;
                font-weight: 400;
              }

              .central-container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 45%;
              }

              .main-menu-item{
                padding: 0.8rem;
                cursor: pointer;
                font-weight: 300;
              }

              a{
                text-decoration: none;
                color: black;
              }

              .footer-bottom{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem 5rem;
                font-size: 14px;
              }

              @media (max-width: 768px) {
                .container{
                  justify-content: space-around;
                  flex-direction: column;
                  padding: 2rem;
                  width: 100%;
                }

                .central-container{
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  padding: 2rem 0;
                  width: 100%;
                }

                .footer-bottom{
                  padding: 2rem 2rem;
                }
              }

            `}</style>
        </>
    )
}
export default Footer;
