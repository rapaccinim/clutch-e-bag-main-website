import Image from 'next/image'
import mainPicture from '../../public/assets/clutch-e-bag-fashion-tech-made-in-italy-home-pic.jpg'
import HeadSEO from "../components/Head/head";

const Home = () => {
    console.log("%cHello devs! Thank you for coming here, please have patience. New website is coming!", "color:blue");
    return (
        <div className="container">
            <HeadSEO
                title={"Clutch-e Bag"}
                description={"FashionTech innovation Made in Italy"}
                pageURL={"home"}
                imageURL={"assets/clutch-e-bag-fashion-tech-made-in-italy-home-pic-min.jpg"}
            />
            <main>
                <section className="welcome-section">
                    <h1 className="homepage-title">
                        <span className="homepage-title-line accent-title">Clutch-e Bag</span>
                        <span className="homepage-title-line">FashionTech</span>
                        <span className="homepage-title-line indent-less">Innovation</span>
                        <span className="homepage-title-line indent-more">Made in Italy</span>
                    </h1>
                </section>
                <Image
                    src={mainPicture}
                    alt="Homepage clutch-e bag main picture fashion tech made in italy startup"
                    priority={true}
                />
                <div className="grid">
                    <a href="https://www.forbes.fr/mediasfrance/le-clutch-e-bag-le-sac-intelligent-moderne-et-elegant/"
                       className="card">
                        <h3>Forbes &rarr;</h3>
                        <p>Read Forbes' article about Clutch-e Bag</p>
                    </a>
                    <a href="https://www.marieclaire.fr/adresses-incontournables/clutch-e-bag-la-pochette-connectee-made-in-italy/"
                       className="card">
                        <h3>Marie Claire &rarr;</h3>
                        <p>Read Marie Claire's article about Clutch-e Bag</p>
                    </a>
                </div>
            </main>

            <style jsx>{`
              .container {
                min-height: 100vh;
                padding: 3rem 7rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              main {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                //align-items: center;
              }
              
              a {
                color: inherit;
                text-decoration: none;
              }
              
              .welcome-section{
              align-items: normal;
              }
              
              .homepage-title{
                margin: 0;
                line-height: 1.15;
                font-size: 80px;   
              }
              
              .homepage-title-line{
                display: block;
                text-align: left;
                padding: 0 0 0.5rem 0;
              }
              
              .homepage-title-line:first-child{
                font-size: 120px;
                margin: 0 0 1rem 0;
                padding-bottom: 3rem;
                border-bottom: 2px solid black;
              }
              
              .indent-less{
                padding-left: 4rem;
              }
              
              .indent-more{
                padding-left: 8rem;
              }

              .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
              }

              .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
              }

              .card:hover,
              .card:focus,
              .card:active {
                color: #0070f3;
                border-color: #0070f3;
              }

              .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }

              .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
              }
              
              @media (max-width: 600px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                }
              }
            `}</style>
        </div>
    )
}
export default Home;