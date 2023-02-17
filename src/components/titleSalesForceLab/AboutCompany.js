import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
function AboutCompany() {
  return (
    <div className='about-company-container'>
        <StyledAboutCompany>
        <div className='text-container'>
            <h1>О компании</h1>
            <p>Мы сообщество экспертов платформы Salesforce и 1С<br/>
                Ваш надежный партнер по в недрению и<br/> сопровождению
            </p>
            <div className='link'><Link href='/'> Подробнее</Link></div>
        </div>
        <div className='image-container'>
            <Image src='/static/Group5.png' width={330} height={190}/>
        </div>
        </StyledAboutCompany>
    </div>
  )
}

export default AboutCompany;

const StyledAboutCompany = styled.div`
    height: 100%;
    margin:186px 0 0 320px;
    display: flex;
    .text-container{
        p{
            margin: 33px 0 33px 0;
        }
        .link{
            background-color:black;
            width:183px;
            height:44px;
            padding-top: 10px;
            text-align:center;
            
            cursor: pointer;
        
            a{
                color:white;
                text-decoration: none;;
            }
        }
    }
    .image-container{
        margin:33px 0 0 111px ;
    }
`