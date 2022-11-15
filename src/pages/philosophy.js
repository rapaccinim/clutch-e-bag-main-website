import visionBeautyIcon from "/public/assets/philosophy-pics/clutch-e-bag-fashion-tech-made-in-italy-philosophy-vision-beauty-icon.svg"
import innovationChangeIcon from "/public/assets/philosophy-pics/clutch-e-bag-fashion-tech-made-in-italy-philosophy-innovation-change-icon.svg"
import productQualityIcon from "/public/assets/philosophy-pics/clutch-e-bag-fashion-tech-made-in-italy-philosophy-quality-product-icon.svg"
import CustomSection from "../components/PhilosophyComponents/CustomSection";
import { nanoid } from 'nanoid'
import HeadSEO from "../components/Head/head";

const philosophyContent = [
    {
        iconSrc: visionBeautyIcon,
        altIconText: "Clutch-e Bag Philosophy Vision Beauty Icon",
        content: [
            `Our vision originates from the willingness to create a product that could introduce a revolution in the world of fashion by mixing elegance and technology.`,
            `Beauty is in the right balance between tradition and innovation, craftsmanship and technology.`,
            `We could obtain an extraordinary product only combining them perfectly.`
        ]
    },
    {
        iconSrc: innovationChangeIcon,
        altIconText: "Clutch-e Bag Philosophy Innovation Change Icon",
        content: [
            `Innovation means to change.`,
            `We strongly believe in a continuous metamorphosis of what surrounds us.`,
            `We are deeply bound by our traditions though we turn our gaze to the future.`
        ]
    },
    {
        iconSrc: productQualityIcon,
        altIconText: "Clutch-e Bag Philosophy Product Quality Icon",
        content: [
            `Our quality lies not only in the materials but also in the whole manufacturing process, in order to take care of every detail of our bags.`,
            `Excellent products can be created only by the combination of masters craftsmen and the modern manufacturing techniques.`
        ]
    }
];

const Philosophy = () => {
    return (
        <>
            <HeadSEO
                title={"Clutch-e Bag - Philosophy"}
                description={"FashionTech innovation Made in Italy"}
                pageURL={"philosophy"}
                imageURL={"assets/clutch-e-bag-fashion-tech-made-in-italy-home-pic-min.jpg"}
            />
            <div className="container">
                <h1>Philosophy</h1>
                {philosophyContent.map(item =>
                    <CustomSection iconSrc={item.iconSrc} altIconText={item.altIconText} content={item.content} key={nanoid()} />
                )}
            </div>
            <style jsx>{`
              .container{
                margin: 0 auto;
                max-width: 680px;
              }
              .custom-section {
                margin: 0 0 60px 0;
              }
              .icon-container{
                display: flex;
                justify-content: center;
              }
            `}</style>
        </>
    )
}
export default Philosophy;