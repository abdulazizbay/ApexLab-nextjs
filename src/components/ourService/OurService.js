import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
function OurService() {
  return (
    <>
      <StyledOurService>
        <div className='our-service-container'>
          <div className='title'>
            <h1>Наши услуги</h1>
            <p>Так же входит обучение всего персонала</p>
          </div>
          <div className='service-cards'>
            <div className='main-cards'>
              <div className='item1'><p>Презентация продуктов и возможностей платформы</p></div>
              <div className='item2'><p>Презентация продуктов и возможностей платформы</p></div>
            </div>
            <div className='sec-cards'>
              <div className='item3'><p>Формирование функциональных и технических требований</p></div>
              <div className='item4'><p>Конфигурация и настройка</p></div>
              <div className='item5'><Link href='/' ><p>Другие Услуги</p></Link></div>
            </div>
              
          </div>
        </div>
      </StyledOurService>
    </>
  )
}

export default OurService

const StyledOurService = styled.div`
  margin:186px 0 0 306px;
  .title{
    h1{
      margin-left:304px;
    }
    p{
      margin: 25px 0 60px 270px;
    }
  }
  .service-cards{
    display:flex;
    .main-cards{
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      .item1 , .item2{
        border:1px solid black;
        width: 330px ;
        height: 200px;
        margin-top:30px;
        padding: 16px;
      }
    }
    .sec-cards{
      display: flex;
      flex-direction: column;
      .item3, .item4 , .item5{
        border:1px solid black;
        margin-top:30px;
        padding: 16px;
      }
      .item3{
        width:300px;
        height:170px
      }
      .item4{
        width:300px;
        height:160px
      }
      .item5{
        width:160px;
        height:30px;
        text-align:center;
        padding-top:5px;
        font-size: smaller;
        margin-top: 40px;
        
        background-color: #28293D;
        color: white !important;
        &:hover{
          cursor: pointer;
        }
      }
    }
    
  }
`