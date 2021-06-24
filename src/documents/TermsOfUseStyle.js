import styled from "styled-components";

export const ParagraphHeading = styled.div`
    display:flex;
    justify-content:center;
    padding-top:40px;
    padding-bottom:5px;

    /* background-color:green; */
    width:780px;
    margin:auto;
    text-align:center;
    color:#7120F6;
    font-size:26px;
    font-weight:500;

    @media all and (max-width: 775px) {
        width:90%;
    }

`;
export const Paragraph = styled.div`
    display:flex;
    justify-content:center;
    padding-top:15px;
    padding-bottom:60px;
    /* background-color:green; */
    width:780px;
    margin:auto;
    text-align:center;
    color:grey;
    font-size:18px;

    @media all and (max-width: 775px) {
        width:90%;
    }
`;