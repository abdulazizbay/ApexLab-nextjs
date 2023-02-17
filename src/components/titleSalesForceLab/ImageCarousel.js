import React from 'react'

import Image from 'next/image'
import styled from 'styled-components'
import { useRef } from 'react';
import Carousel from "react-elastic-carousel";
function ImageCarousel() {
  const carouselRef = useRef(null);
  let resetTimeout;
  
  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1500, itemsToShow: 2, itemsToScroll: 1, },
    { width: 1200, itemsToShow: 2, itemsToScroll: 1 }
    ];
  return (
    <>
    <StyledImageCarousel>
      <div className="carousel" >
        <Carousel  className='carousel-university' breakPoints={breakPoints}
             ref={carouselRef}
             enableAutoPlay={true}
             showArrows={false}
             autoPlaySpeed={4000}
             isRTL={false}
             onNextEnd={({ index }) => {
                 clearTimeout(resetTimeout);
                 resetTimeout = setTimeout(() => {
                     carouselRef?.current?.goTo(0);
                  }, 4000); 
             }}
             >
                                       
                                      
                    
            <div className='card'><Image src='/static/Rectangle94.png' alt="First slide" height={168 } width={260  }/></div>
            <div className='card'><Image src='/static/Rectangle95.png' alt="Second slide" height={168 } width={260 } /></div>
            <div className='card'><Image src='/static/Rectangle96.png' alt="Third slide" height={168 } width={260  } /></div>

        </Carousel>
      </div> 
      </StyledImageCarousel>
    </>
  )
}

export default ImageCarousel;

const StyledImageCarousel = styled.div`
        .carousel{
        .card{
          width:100%;
          display:flex;
          margin: 0 20px 0 20px;
          justify-content:center;
          align-items:center;
          
        }

            .rec.rec-dot {
              
              width: 8px;
              height: 8px;
              margin: 20px 10px 0 0;
              background-color: lightgray;
              border-radius: 4px;
              
              box-shadow: none;;
            }
            .rec.rec-dot_active {
              background: black;
              box-shadow: none;;
            }
      }
`