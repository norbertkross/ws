import styled, { css } from "styled-components";

export const LoginRegisterBody = styled.div`
    padding: 10px;
`;

export const GetInTouch = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    color: rgb(134, 133, 133);
    margin: 40px auto 2px;
    align-self: center;`;

export const SubInTouch = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
    color: rgb(88, 87, 87);
    margin: 5px auto 50px 0px;
    align-self: center;`;

export const LoginRegisterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    `;

export const MyInput = styled.input`
    -moz-border-radius:30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    border: 0px solid #c9c9c9;
    padding: 15px 10px;
    color: grey;
    margin: 10px 1.5%;
    /* margin: auto; */
    width: 30%;
    /* This removes extra square bracket in chrome browser*/
    outline: none;
    box-shadow:0px 4px 10px 2px rgb(113,32,246,.2);
    font-size:18px;


    @media all and  (max-width:1072px){
        width: 40%;
        }


    @media all and  (max-width:500px){
        width: 80%;
        }

    `;


export const LoginSpace = styled.div`
    display: flex;
`;


export const Button = styled.div`
    background-color: #7120F6;
    margin: 0px auto;
    padding: 10px 70px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    border: solid 1px #7120F6;
    display: inline-block;
    transition: all;
    transition-duration:700ms;
    box-shadow:0px 4px 8px 4px rgb(113,32,246,.1);

    
    
    :hover{
    background-color: white;
    color:#7120F6;
    transition: all;
    transition-duration:700ms;
    }
    
    @media all and (max-width:460px){
        padding: 10px 40px;
        background-color:#7120F6;
    }

    `;


 export const SwitchAuthenticationStateContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    /* background-color:goldenrod; */
 `;


 export const SwitchAuthenticationStateItem = styled.div`
    box-shadow:0px 4px 8px 4px rgb(113,32,246,.2);
    //width:50%;
    margin:10px 3px;
    color:grey;
    padding:10px 25px;
    border-radius:10px;
    transition:all;
    transition-duration:800ms;


    ${props => props.isActive === true && css`
    padding:10px 60px; 
    background-color:rgb(113,32,246,.9);
    color:white;
    font-weight:bold;
    transition: all;
    transition-duration:800ms;
    `}

    /* @media all and (max-width:460px){
    padding:10px 60px; 
    background-color:rgb(113,32,246,.9);
    color:white;
    font-weight:bold;
    transition: all;
    transition-duration:800ms;
    } */

    `;

    // export const InputErrMsg = styled.div`              
    //    display:flex; 
    //    justify-content:center;
    //    margin:auto;
    //    color: ${props => props.err ===true?'red':'#7120F6'};
    //    font-size:12px;
    // `;
