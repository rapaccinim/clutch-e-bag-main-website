import Link from "next/link";
import React from "react";

const MainMenu = ({menuItems}) => {
    return (
        <>
            <nav className="main-menu">
                {menuItems.map((item, i) =>
                    <Link href={"/" + item.itemLink} key={i}>
                        <div className="main-menu-item">{item.itemName}</div>
                    </Link>)}
            </nav>
            <style jsx>{`
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
            `}</style>
        </>
    )
}
export default MainMenu;
