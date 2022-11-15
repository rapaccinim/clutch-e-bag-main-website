import HeadSEO from "../components/Head/head";

const Custom404 = () => {
    return (
        <>
            <HeadSEO
                title={"Clutch-e Bag - Page not found"}
                description={"FashionTech innovation Made in Italy"}
                pageURL={"404"}
                imageURL={"assets/clutch-e-bag-fashion-tech-made-in-italy-home-pic-min.jpg"}
            />
            <section>404 - Page Not Found</section>
            <style jsx>{`
              section {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}</style>
        </>
    )
}
export default Custom404;