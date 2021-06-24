import styled from "styled-components"


export const CategoryMainBody = styled.div`   

`;


export const CategoryBody = styled.div` 
    display:flex;  
    flex-wrap:wrap;
    justify-content:center;
    /* background-color:brown; */
    /* background-color:rgb(113,32,246,.1); */
    margin:13% auto 10px auto;
    width:60%;
    color:#7120F6;
    font-weight:bold;
    font-size:120px;
    font-family:fira code;
    /* height: 200px; */

    @media all and(max-width:780px){
        width:85%;
    }
`;


export const CatergoryGreyDescription = styled.div`
    display:flex;
    justify-content:center;
    color:grey;
    font-size:30px;
    font-weight:500;

`;


