import instagramIcon from "/public/assets/iconmonstr-instagram-11.svg";
import linkedinIcon from "/public/assets/iconmonstr-linkedin-3.svg";
import Image from "next/image";

const socialItems = [
    {
        link: {
            href: 'https://www.instagram.com/clutch_ebag/',
            title: 'Follow Clutch-e Bag on Instagram',
            target: '_blank',
        },
        icon: {
            src: instagramIcon,
            alt: 'Instagram icon clutch-e bag main website innovation fashion tech made in italy startup'
        },
        text: "Instagram"
    },
    {
        link: {
            href: 'https://www.linkedin.com/company/clutchebag',
            title: 'Follow Clutch-e Bag on LinkedIn',
            target: '_blank',
        },
        icon: {
            src: linkedinIcon,
            alt: 'Linkedin icon clutch-e bag main website innovation fashion tech made in italy startup',
        },
        text: "LinkedIn"
    }
]

const SocialItems = () => {

    return(
        <>
            <div className="follow-us-container">
                <div className="main-menu-item title">Follow Us</div>
                {socialItems.map((item) =>
                   (
                       <a
                           href={item.link.href}
                           title={item.link.title}
                           target={item.link.target}
                           key={item.text}
                       >
                           <div className="social-container" style={{paddingLeft: 12.8+"px"}}>
                               <Image
                                   src={item.icon.src}
                                   alt={item.icon.alt}
                               />
                               <p style={{paddingLeft: 0.5+"rem"}}>{item.text}</p>
                           </div>
                       </a>
                    )
                )}
            </div>
            <style jsx>{`
                .title{
                    font-family: Antic Didone, sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                }
                .main-menu-item{
                    padding: 0.8rem;
                    cursor: pointer;
                    font-weight: 300;
                }
                .social-container{
                    display: flex;
                    flex-direction: row;
                    font-weight: 300;
                    cursor: pointer;
                }
                a{
                    text-decoration: none;
                    color: black;
                }
                @media (max-width: 768px) {
                    .follow-us-container{
                      margin-top: 1rem;
                    }
                }
            `}</style>
        </>
    )
}
export default SocialItems;