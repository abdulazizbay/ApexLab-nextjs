import styled,{css} from "styled-components"


const StyledButton = styled.div`
    
    
    width:173px;
    height:39px;
    padding-top: 10px;
    text-align:center;
    color: #FFFFFF; 
    cursor: pointer;
    background-color:#28293D;
    a{
        color:white;
        text-decoration: none;;
    }
`
function Button({children}){
    return <StyledButton >{children}</StyledButton>
}
export default Button;