import pic1 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-1.jpeg"
import pic2 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-2.jpeg"
import pic3 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-3.jpeg"
import pic4 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-4.jpeg"
import pic5 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-5.jpeg"
import pic6 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-6.jpeg"
import pic7 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-7.jpeg"
import pic8 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-8.jpeg"
import pic9 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-9.jpeg"
import pic10 from "/public/assets/gallery/clutch-e-bag-gallery-picture-fashion-tech-10.jpeg"

import Image from "next/image";

const Gallery = () => {

    const altText = "Clutch-e Bag fashion tech Made in Italy smart bags "

    const galleryItems = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

    return (
        <>
            <div className="container">
                <h1>Gallery</h1>
                <div>
                    {galleryItems.map((item, key) =>
                        <div
                            className="image-container"
                            key={key}
                        >
                            <Image
                                src={item.src}
                                alt={`${altText + key}`}
                                width="1920"
                                height="1080"
                                objectFit='cover'
                            />
                        </div>)}
                </div>
            </div>
            <style jsx>{`
              .container{
                margin: 0 auto;
                max-width: 680px;
              }
              .image-container{
                  padding: 0.5rem 1rem;
              }
            `}</style>
        </>
    )
}
export default Gallery;