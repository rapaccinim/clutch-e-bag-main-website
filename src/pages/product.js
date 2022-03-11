import Accordion from "../components/Accordion/accordion"

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