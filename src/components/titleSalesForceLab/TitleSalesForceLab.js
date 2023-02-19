import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import ImageCarousel from './ImageCarousel'
import AboutCompany from './AboutCompany'
function TitleSalesForceLab() {

  return (
    <div className='titleSales-container'>
          <StyledTitle>
            <div className='title-with-carousel'>
              <div className='big-image'>
                <Image src='/static/Rectangle93.png' width={320} height={420} />
              </div>
              <div  className='title-and-image'>
                <h1>Selesforce Lab</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor<br/> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  {/* Image carousel component */}
                  <ImageCarousel/>
                </div>
              </div>
            {/* About Company component */}
            <AboutCompany/>
          </StyledTitle>
      
    </div>
  )
}
export default TitleSalesForceLab 

const StyledTitle = styled.div`
  padding:0;
  margin:0;
  align-items: center;  
  top: 0;
  left: 0;
  height: 100%;
  .title-with-carousel{
    display: flex;
    margin: 80px 0px 0px 318px ;
    .big-image{ 
      img{
        width: 250px;
        height: 340px;
        
      }
    }
    .title-and-image{
      margin-left:38px;
      h1{
        font-weight: 700;
        font-size: 54px;
        line-height: 1px;
        
      }
      p{
        margin: 68px 0 68px 0;
      }

    }

  }
  
`