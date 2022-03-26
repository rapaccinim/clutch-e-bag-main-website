import Accordion from "../components/Accordion/accordion";
import Carousel from "../components/Carousel/carousel";

const Product = () => {
    return (
        <div className="container">
            <p>Product Page</p>
            <Accordion items={
                [
                    {title: "Titolo 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo et! Obcaecati magnam excepturi consectetur iste. Doloremque consequatur beatae enim voluptates officia, cum exercitationem sapiente autem dignissimos iste voluptatum fuga."},
                    {title: "Titolo 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo et! Obcaecati magnam excepturi consectetur iste. Doloremque consequatur beatae enim voluptates officia, cum exercitationem sapiente autem dignissimos iste voluptatum fuga."},
                ]
            } />

            <Carousel
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
                .container{
                    padding: 5rem 7rem;
                }
                // CSS-END
            `}</style>
        </div>
    )
}
export default Product