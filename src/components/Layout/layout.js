import Header from "../Header/header.js";
import Footer from "../Footer/footer.js";

const Layout = (props) => {
      return (
        <>
            <Header/>
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
              main{
                min-height: 100vh;
                padding: 3rem 7rem;
                display: flex;
              }
              .accent-title{
                font-family: 'Antic Didone', serif;
              }
            `}</style>
        </>
      );
}
export default Layout;
