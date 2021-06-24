import styled from "styled-components";

export const LoaderBody = styled.div`
    display:flex;
    justify-content:center;
    align-items:baseline;
    height: 36px;
    width:100%;

`;

export const LoaderItem = styled.div`
    background-color:${props =>props.isActive === true?"rgb(113,32,246,1)":"rgb(113,32,246,0.8)"};
    box-shadow:0px 4px 8px 4px rgb(113,32,246,.15);
    border-radius:1px;
    height:${props =>props.isActive === true? "35px":"25px"};
    width:${props =>props.isActive === true? "12px":"10px"};
    margin:1px 4px;
    transition:all;
    transition-duration:400ms;

    

`;