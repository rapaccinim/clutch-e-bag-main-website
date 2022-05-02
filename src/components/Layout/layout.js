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
                max-width: 1920px;
              }
              * {
                box-sizing: border-box;
              }
              main{
                min-height: 100vh;
                padding: 3rem 7rem;
                display: flex;
              }
              h1{
                font-size: 70px;
              }
              h1, .accent-title{
                font-family: 'Antic Didone', serif;
              }
              @media (max-width: 768px) {  
                main{
                  padding: 3rem 2rem;
                }
                h1 {
                  font-size: 50px;
                }
              }
            `}</style>
        </>
      );
}
export default Layout;
