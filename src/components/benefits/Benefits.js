import React from 'react'
import styled from 'styled-components'
import {Cards} from './Cards'
function Benefits() {
  return (
    <>
        <StyledBenefits>
            <div className='benefits-container'>
                <div className='title-description'>
                    <h1>Salesforce</h1>
                    <p>CRM #1 в мире</p>
                </div>
                <div className='about-cards-grid'>
                    {Cards.map((item)=>{
                        return <div className='card' key={item.id}>
                            <div>{item.img}</div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </StyledBenefits>
    </>
  )
}

export default Benefits;

const StyledBenefits = styled.div`
    .benefits-container{
        margin: 186px 0 0 220px;
        .title-description{
            margin-left: 660px;
            p{
                margin-top: 33px;
            }
        }
        .about-cards-grid{
            margin-top: 80px;
            display: grid;
            grid-template-columns: 27% 27% 27%;
            row-gap:33px;
            .card{
                width: 291px;
                height: 213px;
                border:1px solid black;
                padding:16px;
                h1{
                    margin:16px 0 16px 0;
                }
            }
        }
    }
`