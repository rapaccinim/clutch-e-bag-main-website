import Image from "next/image";
import pageUnderConstructionPic from "/public/assets/clutch-e-bag-fashion-tech-pochette-page-under-construction-big.jpg"

const UnderConstruction = () => {
    return (
        <>
            <section>
                <Image src={pageUnderConstructionPic}/>
                <h1>This page is under construction</h1>
                <p>Please come back soon</p>
            </section>
            <style jsx>{`
              section {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                  flex-direction: column;
              }
              h1{
                padding: 2rem;
              }
            `}</style>
        </>
    )
}
export default UnderConstruction;