import Accordion from "../components/Accordion/accordion";
import Carousel from "../components/Carousel/carousel";

const Product = () => {
    return (
        <div className="container-fluid">
            <section className="flex hero-section">
                <div className="flex-basis-50">
                    <Carousel
                        sizeFull={true}
                        items={[
                        {
                            image:
                            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        },
                        {
                            image:
                            "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
                        },
                        {
                            image:
                            "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                        }
                        ]}
                    />
                </div>
                <div className="hero-section__description flex flex-col flex-basis-50">
                    <h1 className="">Clutch-e bag</h1>
                    <p>
                      The first Smart Fashion Tech pochette in the world.
                      The objective is that of bringing a new idea of handbag.
                    </p>
                    <p>
                      Clutch-e Bag is equipped with fingerprint scanner for the opening, GPS tracking system, speaker to make it ring and find it easily everytime everywhere, removable power bank with external magnetic port.
                    </p>
                    <a href="#">full features</a>
                </div>
                
            </section>

            <section className="features">
                <h2 className="text-center py-5">Full Features</h2>
                <div className="features__icons flex justify-content-evenly">
                    <div className="flex flex-col align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/253/253298.png" alt="Feature Icon" className="icon" />
                        <p>icona feature</p>
                    </div>
                    <div className="flex flex-col align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/253/253298.png" alt="Feature Icon" className="icon" />
                        <p>icona feature</p>
                    </div>
                    <div className="flex flex-col align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/253/253298.png" alt="Feature Icon" className="icon" />
                        <p>icona feature</p>
                    </div>
                </div>
                <div className="feature__card py-5 flex">
                    <div className="feature__description flex-basis-50 py-2 px-5">
                        <h3>Feature 1</h3>
                        <div className="pl-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu aliquet tellus a sit nec nec scelerisque. Commodo, at feugiat ac facilisis quis mauris, nulla. Faucibus nibh commodo gravida vel enim. 
                            </p>
                            <Accordion 
                                items={[
                                    {
                                        title: 'Materiale',
                                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque magna in est consequat id nibh. Elit ornare quisque volutpat amet. Id phasellus at aenean egestas nulla.'
                                    },
                                    {
                                        title: 'Dimensioni',
                                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque magna in est consequat id nibh. Elit ornare quisque volutpat amet. Id phasellus at aenean egestas nulla.'
                                    },
                                    {
                                        title: 'Lorem Ipsum',
                                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque magna in est consequat id nibh. Elit ornare quisque volutpat amet. Id phasellus at aenean egestas nulla.'
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="feature__image flex-basis-50">
                        <img src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" className="img-fluid" />
                    </div>
                    
                </div>
                <div className="feature__card py-5 flex">
                    <div className="feature__description flex-basis-50 py-2 px-5">
                        <h3>Feature 2</h3>
                        <div className="pl-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu aliquet tellus a sit nec nec scelerisque. Commodo, at feugiat ac facilisis quis mauris, nulla. Faucibus nibh commodo gravida vel enim. 
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu aliquet tellus a sit nec nec scelerisque. Commodo, at feugiat ac facilisis quis mauris, nulla. Faucibus nibh commodo gravida vel enim. 
                            </p>
                        </div>
                    </div>
                    <div className="feature__image flex-basis-50">
                        <img src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" className="img-fluid" />
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
                    font-family: 'Antic Didone';
                }
                h1 {
                    font-size: 70px;
                }
                h2 {
                    font-size: 45px;
                }
                h3 {
                    font-size: 30px;
                }
                p {
                    font-size: 16px;
                    font-family: 'Inter';
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
    )
}
export default Product