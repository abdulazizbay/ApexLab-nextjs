import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='navbar-container'>
      <StyledNavbar>
        <div className='navbar-content'>
          <div className='navbar-texts'>
            <Link href='/about'><h4>O нас</h4></Link>
            <Link href='/sakesforce'><h4>Salesforce</h4></Link>
            <Link href='/1c'><h4>1C</h4></Link>
            <Link href='/contacts'><h4>Контакты</h4></Link>
          </div>
          <div className='navbar-logo'>
            <Image src='/static/BlackLogo.png' height={50} width={100} alt='logo'/>
          </div>
        </div>
        <hr />
      </StyledNavbar>
      
    </div>
    
  )
}

export default Navbar

const StyledNavbar = styled.div`
  height: 114px;
  width: 100%;
  align-items: center;  
  top: 0;
  left: 0;
  .navbar-content{
    display: grid;
    grid-template-columns: auto auto auto;;
    margin: 20px 300.5px 20px 300.5px;
    .navbar-texts{
      display: flex;
        h4{
        margin-right: 50px;
        } 
        &:hover{
          cursor: pointer;
        }
    }
    .navbar-logo{
      margin-left: 298px;
    }
  }
`