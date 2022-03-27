import { useState } from "react";

const Carousel = (props) => {

  const { sizeFull } = { ...props };

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    const images = props.items.length;
    setCurrentSlide((currentSlide + 1) % images);
  };

  const prev = () => {
    const images = props.items.length;
    let current = currentSlide;

    current -= 1;
    if (current < 0) {
      current = images - 1;
    }

    setCurrentSlide(current);
  };

  const isFull = () => {
    if(!sizeFull) return null;

    return {height: '100%'};
  }

  return (
    <>
      <div className="slideshow" style={isFull()}>
        <div className="slideshow-container" style={isFull()}>
          {props.items.map((el, index) => (
            <div
              className="mySlides fade"
              hidden={currentSlide == index ? false : true}
              style={isFull()}
            >
              <div className="numbertext">
                {index + 1} / {props.items.length}
              </div>
              <img src={el.image} style={ sizeFull == true ? {height: '100%', width: '100%', objectFit: 'cover'} : {width: '100%'} } />
            </div>
          ))}

          <a className="prev" onClick={prev}>
            &#10094;
          </a>
          <a className="next" onClick={next}>
            &#10095;
          </a>
        </div>

        <div className="dot-container">
          {props.items.map((_, index) => (
            <span
              className="dot"
              onClick={() => {
                setCurrentSlide(index);
              }}
            ></span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .slideshow {
          position: relative;
          width: 100%;
        }
        
        .slideshow-container {
          max-width: 100%;
          max-height: 100vh;
          position: relative;
          margin: auto;
          overflow: hidden;
        }
        
        .dot-container {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        /* Next & previous buttons */
        .prev,
        .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          margin-top: -22px;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }
        
        /* Position the "next button" to the right */
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }
        
        /* On hover, add a black background color with a little bit see-through */
        .prev:hover,
        .next:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        
        /* Caption text */
        .text {
          color: #f2f2f2;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          bottom: 8px;
          width: 100%;
          text-align: center;
        }
        
        /* Number text (1/3 etc) */
        .numbertext {
          color: #f2f2f2;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }
        
        /* The dots/bullets/indicators */
        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }
        
        .active,
        .dot:hover {
          background-color: #717171;
        }
        
        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }
        
        @-webkit-keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }
      `}
      </style>
    </>
  );
}

export default Carousel;