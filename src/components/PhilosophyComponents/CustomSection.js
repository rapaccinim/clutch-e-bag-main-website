const CustomSection = ({iconSrc, altIconText, content}) => {
    return(
        <>
            <div className="custom-section">
                <div className="icon-container">
                    <img src={iconSrc.src} alt={altIconText} className="icon-img" />
                </div>
                <div>{content.map( (paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </div>
            <style jsx>{`
              .custom-section {
                margin: 0 0 80px 0;
              }
              .icon-container{
                display: flex;
                justify-content: center;
              }
            `}</style>
        </>
    )
}
export default CustomSection;