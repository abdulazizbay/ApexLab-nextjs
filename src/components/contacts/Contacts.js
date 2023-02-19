import React, {useState} from 'react'
import styled from 'styled-components'
import Image from 'next/image';
const InputField = styled.input``
function Contacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");
  return (
    <>
        <StyledContacts>
            <div className='contacts-container'>
                <div className='content'>
                    <div className='title'><h1>Контакты</h1></div>
                    <div className='form'>
                        {/* Event prevent default can be  used */}
                        <form>
                            <label htmlFor='name'>Ваше Ф.И.О</label>
                            <InputField name='name' placeholder='Ф.И.О' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                            <label htmlFor='email'>Корпоративный e-mail</label>
                            <InputField name='email' placeholder='Корпоративный e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                            <label htmlFor='number'>Телефон</label>
                            <InputField name='number' placeholder='+998 99 999-99-99' value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
                            <label htmlFor='company'>Компания</label>
                            <InputField name='company' placeholder='Название вашей компании' value={company} onChange={(e)=>setCompany(e.target.value)}/><br/>
                            <button>Отправить</button>
                        </form>                    
                    </div>
                </div>
                <div className='image'>
                    <Image src='/static/Rectangle99.png' height={413} width={260}/>
                </div>
            </div>
        </StyledContacts>
    </>
  )
}

export default Contacts

const StyledContacts = styled.div`
    .contacts-container{
        display: flex;
        margin:130px 0 0 320px;
        .form{
            margin-top: 28px;
            input, label {
                display:block;
            }
            input{
                margin-top: 13px;
                width:330px;
                height:32px;
            }   
            button{
                background-color: #28293D;
                color: white;
                width: 160px;
                height: 34px;
                font-size: smaller;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    .image{
        margin: 30px 0 0 90px;
    }
}
`