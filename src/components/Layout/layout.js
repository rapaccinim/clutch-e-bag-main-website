// use this component to apply a style to all the pages (see pages/_app.js)
import Header from "../Header/header.js";
import MobileHeader from "../MobileHeader/mobileHeader.js";
import Footer from "../Footer/footer";
import React, {useEffect} from "react";

const Layout = (props) => {

    const [mQuery, setMQuery] = React.useState({
      matches: globalThis?.window?.innerWidth > 768 ? true : false,
    })

    useEffect(() => {
      window.matchMedia("(min-width: 768px)").addListener(setMQuery);
    });

      return (
        <>
            {process.browser ? (mQuery && !mQuery.matches ?
                <MobileHeader/>
             :
                <Header/>
            ): null}
            <main>{props.children}</main>
            <Footer/>
            <style jsx global>{`
              html, body {
                padding: 0;
                margin: 0;
                font-family: 'Inter', sans-serif;
                overflow-x: hidden;
              }

              * {
                box-sizing: border-box;
              }

              .accent-title{
                font-family: 'Antic Didone', serif;
              }
            `}</style>
        </>
      );

}
export default Layout;
