import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='navbar-container'>
      <StyledNavbar>
        <div className='navbar-content'>

          <div className='navbar-texts'>
            <h4>O нас</h4>
            <h4>Salesforce</h4>
            <h4>1C</h4>
            <h4>Контакты</h4>
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
    }
    .navbar-logo{
      
      margin-left: 298px;
      img{
        width:100px;
        height:50px;
      }
    }
  }
  
`