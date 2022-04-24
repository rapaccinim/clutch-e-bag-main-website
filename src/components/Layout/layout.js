// use this component to apply a style to all the pages (see pages/_app.js)
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = (props) => {
    return (
        <>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: 'Inter', sans-serif;
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
    )
}
export default Layout;