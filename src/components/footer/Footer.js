import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
function Footer() {
  return(
    <>
      <StyledFooter>
        <div className='footer-container'>
          <div className='footer-logo'>
            <Image src='/static/BlackLogo.png' height={50} width={100} alt='logo'/>
          </div>
          <div className='content'>
            <Link href='/about'><p> О компании</p></Link>
            <Link href='/about'><p> О компании</p></Link>
            <Link href='/call'><p> +998 (33) 333-33-33</p></Link>
            <Link href='/ourproducts'><p> Наши продукты</p></Link>
            <Link href='/contacts'><p> Контакты</p></Link>
            <Link href='/call'><p> +998 (33) 333-33-33</p></Link>
          </div>
          <div className='button'>
            <Link href='/'><div>Другие Услуги</div></Link>
          </div>
        </div>
      </StyledFooter>
    </>
  )
}

export default Footer

const StyledFooter = styled.div`
  .footer-container{
    margin: 60px 0 0 230px;
    display: flex;
    .content{
      margin: 0 80px 0 80px;
      display: grid;
      grid-template-columns: auto auto  auto;;
      column-gap: 70px;
      row-gap: 10px;
      &:hover{
        cursor: pointer;
      }
    }
    .button{
      background-color: #28293D;
      color: white;
      width: 160px;
      height: 34px;
      font-size: smaller;
      text-align:center;
      padding-top: 8px;
      &:hover{
        cursor: pointer;
      }
      }
  }
`