import Accordion from "../components/Accordion/accordion";
import Carousel from "../components/Carousel/carousel";
import firstPic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-1st.jpg"
import secondPic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-2nd.jpg"
import sidePinkPic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-side-pink.jpg"
import frontBluePic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-front-blue.jpg"
import sideWhitePic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-side-white.jpg"
import frontBlackPic from "/public/assets/carousel/clutch-e-bag-fashion-tech-made-in-italy-front-black.jpg"
import fingerPrintPic from "/public/assets/more-info-pics/clutch-e-bag-fashion-tech-made-in-italy-technology-finger-print.jpg"
import technologyPic from "/public/assets/more-info-pics/clutch-e-bag-fashion-tech-made-in-italy-technology-connected.jpg"
import genuineLeatherPic from "/public/assets/more-info-pics/clutch-e-bag-fashion-tech-made-in-italy-technology-genuine-leather.jpg"
import fingerPrintIcon from "/public/assets/more-info-icons/clutch-e-bag-fashion-tech-made-in-italy-finger-print-scanner-icon.svg"
import technologyIcon from "/public/assets/more-info-icons/clutch-e-bag-fashion-tech-made-in-italy-technology.svg"
import genuineLeatherIcon from "/public/assets/more-info-icons/clutch-e-bag-fashion-tech-made-in-italy-leather.svg"
import HeadSEO from "../components/Head/head";

const Home = () => {
    return (
        <>
            <HeadSEO
                title={"Clutch-e Bag"}
                description={"FashionTech innovation Made in Italy"}
                pageURL={"home"}
                imageURL={"assets/clutch-e-bag-fashion-tech-made-in-italy-home-pic-min.jpg"}
            />
        <div className="container-fluid">
            <section className="flex hero-section">
                <div className="flex-basis-50">
                    <Carousel
                        sizeFull={true}
                        items={[
                            {
                                image: firstPic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 1`
                            },
                            {
                                image: secondPic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 2`
                            },
                            {
                                image: sidePinkPic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 3`
                            },
                            {
                                image: frontBluePic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 4`
                            },
                            {
                                image: sideWhitePic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 5`
                            },
                            {
                                image: frontBlackPic,
                                altText: `Clutch-e Bag smart pochette fashion tech carousel picture 6`
                            }
                        ]}
                    />
                </div>
                <div className="hero-section__description flex flex-col flex-basis-50">
                    <h1 className="">Clutch-e bag</h1>
                    <p>
                        The first Smart Fashion Tech pochette in the world.
                    </p>
                    <p>
                        Our objective is that of bringing a new idea of handbag.
                    </p>
                    <p>
                        Clutch-e Bag is equipped with fingerprint scanner for the opening, GPS tracking system, speaker to make it ring and find it easily everytime everywhere, removable power bank with external magnetic port.
                    </p>
                    <a href="#discover-more" className="anchor-link">Discover More</a>
                </div>

            </section>

            <section className="features" id="discover-more">
                <h2 className="text-center py-5">More about Clutch-e</h2>
                <div className="features__icons flex justify-content-evenly">
                    <div className="flex flex-col align-items-center">
                        <img src={fingerPrintIcon.src} alt="Clutch-e Bag Finger Print Scanner Icon" className="icon" />
                        <p>Finger Print Scanner</p>
                    </div>
                    <div className="flex flex-col align-items-center">
                        <img src={technologyIcon.src} alt="Clutch-e Bag Technology Icon" className="icon" />
                        <p>Technology</p>
                    </div>
                    <div className="flex flex-col align-items-center">
                        <img src={genuineLeatherIcon.src} alt="Clutch-e Bag Genuine Leather Icon" className="icon" />
                        <p>Design</p>
                    </div>
                </div>
                <div className="feature__card py-5 flex">
                    <div className="feature__description flex-basis-50 py-2 px-5">
                        <h3>Finger Print Scanner</h3>
                        <div className="pl-3">
                            <p>
                                Clutch-e Bag comes with the <b>next level security concept</b>, in fact you can open the pochette with your fingerprint.
                            </p>
                            <p>
                                No one else will be able to do that.
                            </p>
                            <p>
                                If you prefer, you can choose to open Clutch-e Bag via your smartphone using our dedicated mobile app.
                            </p>
                        </div>
                    </div>
                    <div className="feature__image flex-basis-50">
                        <img src={fingerPrintPic.src} alt="clutch-e bag fashion tech finger print scanner" className="img-fluid" />
                    </div>
                </div>
                <div className="feature__card py-5 flex">
                    <div className="feature__description flex-basis-50 py-2 px-5">
                        <h3>Technology</h3>
                        <div className="pl-3">
                            <p>
                                Your Clutch-e is <b>always connected</b> to your smartphone.</p>
                            <Accordion
                                items={[
                                    {
                                        title: 'Smartphone App',
                                        description: `Thanks to our mobile app you can check the charge status, track it via GPS or remotely open it. Clutch-e will also send you alerts if you leave it behind.`
                                    },
                                    {
                                        title: 'Power Bank',
                                        description: `A removable power bank with magnetic pogo connector allows you to keep your smartphone charged during the day. You won't need to keep your bag open in order to recharge your smartphone.`
                                    },
                                    {
                                        title: 'RFID Blocking',
                                        description: `The RFID Blocking System protects your credit cards and passport from contactless payments and scans.`
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="feature__image flex-basis-50">
                        <img src={technologyPic.src} alt="clutch-e bag fashion tech technology smartphone app power bank rfid blocking" className="img-fluid" />
                    </div>
                </div>
                <div className="feature__card py-5 flex">
                    <div className="feature__description flex-basis-50 py-2 px-5">
                        <h3>Design</h3>
                        <div className="pl-3">
                            <p>
                                We know that <b>design</b> and <b>quality</b> mean a lot to you.
                            </p>
                            <p>
                                That's why every Clutch-e is <b>highly detailed</b>.
                            </p>
                            <Accordion
                                items={[
                                    {
                                        title: `Craftsmanship`,
                                        description: `Clutch-e Bag is designed and manufactured in Italy, combining the modern techniques and the experience of master craftsmen of Florence.`
                                    },
                                    {
                                        title: `Materials`,
                                        description: `Clutch-e Bag is manufactured using high-quality materials such as Premium calfskin, lambskin, satin, 24K gold plated frame and highly resistant plastic polymers.`
                                    },
                                    {
                                        title: `Stay Organised`,
                                        description: `Clutch-e Bag provides you with different pockets to help keeping all your belongings organised`
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="feature__image flex-basis-50">
                        <img src={genuineLeatherPic.src} alt="clutch-e bag fashion tech design" className="img-fluid" />
                    </div>
                </div>

            </section>

            <style jsx>{`
                .container-fluid {
                  width: 100%;
                }
                .flex {
                    display: flex;
                }
                .flex-col {
                    flex-direction: column;
                }
                .flex-basis-50 {
                    flex-basis: 50%;
                }
                .justify-content-center {
                    justify-content: center;
                }
                .justify-content-evenly {
                    justify-content: space-evenly;
                }
                .align-items-center {
                    align-items: center;
                }
                .img-fluid {
                    max-width: 100%;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Antic Didone', sans-serif;
                }
                h1 {
                    font-size: 70px;
                }
                h2 {
                    font-size: 45px;
                }
                h3 {
                    font-size: 30px;
                    padding: 0 3rem;
                }
                p {
                    font-size: 16px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 300;
                    line-height: 26px;
                }
                .py-2 {
                    padding: 2rem 0;
                }
                .py-5 {
                    padding: 5rem 0;
                }
                .px-5 {
                    padding: 0 5rem;
                }
                .pl-3 {
                    padding: 3rem;
                }
                .hero-section__description {
                    padding: 5rem 3rem;
                    align-items: start;
                }
                .feature__card:nth-child(2) {
                    flex-direction: row-reverse;
                }
                .icon {
                    width: 60px;
                    height: 60px;
                }
                .text-center {
                    text-align: center;
                }
                .anchor-link{
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #000000;
                }
                @media screen and (max-width: 992px) {
                    .feature__description {
                        padding: 0 2rem;
                    }
                }
                @media screen and (max-width: 768px) {
                  .hero-section {
                    flex-direction: column;
                  }
                  .feature__card {
                      flex-direction: column;
                  }
                  .features__icons {
                      flex-direction: column;
                  }
                }
                
            `}</style>
        </div>
        </>
    )
}
export default Home