import React from 'react';
import { animated } from 'react-spring';

const MobileMenu = ({style}) => {
    return(
      <>
        <animated.div className='menu-container' style={style}>
          <nav className='menu-list'>
            <p className='menu-list-item'>
              Home
            </p>
            <p className='menu-list-item'>
              Filosofia
            </p>
            <p className='menu-list-item'>
              Clutch-e bag
            </p>
            <p className='menu-list-item'>
              Contatti
            </p>
          </nav>
        </animated.div>
        <style jsx>{`
            .menu-list-item{
              font-weight: 300;
              font-size: 1rem;
              line-height: 3.5rem;
              letter-spacing: 0.1rem;
              display: inline-block;
              position: relative;
              color: #fff;
              cursor: pointer;
            }

            .menu-list{
              top: 0;
              height: 92vh;
              width: 100vw;
              margin-bottom: 3rem;
              position: fixed;
              background-color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
       `}</style>
    </>
  )
}
export default MobileMenu;
