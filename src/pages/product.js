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

                    Clutch-e Bag is equipped with fingerprint scanner for the opening, GPS tracking system, speaker to make it ring and find it easily everytime everywhere, removable power bank with external magnetic port.

                    full features
                    </p>
                </div>
                
            </section>
            <p>Product Page</p>
            <Accordion items={
                [
                    {title: "Titolo 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo et! Obcaecati magnam excepturi consectetur iste. Doloremque consequatur beatae enim voluptates officia, cum exercitationem sapiente autem dignissimos iste voluptatum fuga."},
                    {title: "Titolo 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo et! Obcaecati magnam excepturi consectetur iste. Doloremque consequatur beatae enim voluptates officia, cum exercitationem sapiente autem dignissimos iste voluptatum fuga."},
                ]
            } />

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
            
            <style jsx>{`
                // CSS-START
                // insert here the CSS for this page
                .container-fluid {
                  width: 100%;
                }
                .flex {
                    display: flex;
                }
                .flex-col {
                    flex-direction: column;
                }
                .justify-content-center {
                    justify-content: center
                }
                p {
                    font-size: 16px;
                }
                .hero-section__description {
                    font-family: 'Antic Didone';
                    padding: 5rem 3rem;
                    justify-content: start;
                    align-items: center;
                }
                .flex-basis-50 {
                    flex-basis: 50%;
                }
                // CSS-END
            `}</style>
        </div>
    )
}
export default Product