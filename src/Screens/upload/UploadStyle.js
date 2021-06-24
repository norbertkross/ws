import styled, { css } from "styled-components"


export const PhotoAndDecription = styled.div`

`;




export const UploadClickContainer = styled.div`

    justify-self:center;
    justify-content:center;
    width:550px;
    /* background-color:green; */
    border:2px solid #DAC3FF;
    border-radius:10px;
    margin:40px auto 0px auto;
    padding:80px 0px;
    ${props => props.isImage === true && css`
        background-image: url(${props.image});
        background-position:center;
        background-size:contain;
        background-repeat:no-repeat;
    `}


    :hover{
        border:2px solid #7120F6; 
        opacity: .6; 
    }

    @media all and (max-width: 660px) {
        width:90%;
    }
`;



export const UploadPicture = styled.div`
    display:flex;
    justify-self:center;
    height: 100px;
    width:100px;
    /* background-color:red; */
    background-image:url(${props =>props.image});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    margin:40px auto;

    ${props => props.isImage === true && css`
    background-image:none;
    `}
    @media all and (max-width: 250px) {
        width:90%;
    }
`;



export const UploadText = styled.div`
    display:flex;
    justify-content:center;
    margin:40px auto;
    color: #DAC3FF;
    font-size:30px;
    font-weight:500;
    text-align:center;


    ${props => props.isImage === true && css`
        display:none;
        opacity: 1; 
    `}

    :hover{
        opacity: .6; 
    }

    @media all and (max-width: 250px) {
        width:90%;
    }
`;


export const CodeInput = styled.textarea`
    display:flex;
    margin:auto;
    /* width:640px; */
    width:780px;

    -moz-border-radius:10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 2px solid #DAC3FF;
    padding: 50px 10px;
    color: #7120F6;
    /* This removes extra square bracket in chrome browser*/
    outline: none;
    
    @media all and (max-width: 900px) {
        width:90%;
    }

`;


export const CodeTagsInput = styled.textarea`
    display:flex;
    margin:30px auto;
    width:520px;

    -moz-border-radius:10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 2px solid #DAC3FF;
    padding-top: 25px;
    padding-bottom: 25px;
    /* margin-top:30px; */
    color: #7120F6;
    /* This removes extra square bracket in chrome browser*/
    outline: none;
    
    @media all and (max-width: 778px) {
        width:90vw;
    }

`;



export const WidgetNameInput = styled.input`
    display:flex;
    margin:30px auto;
    width:520px;

    -moz-border-radius:10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 2px solid #DAC3FF;
    padding-top: 15px;
    padding-bottom: 15px;
    /* margin-top:30px; */
    color: #7120F6;
    /* This removes extra square bracket in chrome browser*/
    outline: none;
    
    @media all and (max-width: 778px) {
        width:90vw;
    }

`;



export const CoverCodeTagsInput = styled.div`
    margin:0px auto;
    padding-left:170px;


    @media all and (max-width: 780px) {
        padding-left:0px;
    }

`;



export const TagsLabel = styled.div`
    /* display:flex;
    flex-wrap:wrap;
    justify-content:flex-end; */
    margin:auto;
    color:grey;
    font-size:20px;
    font-weight:500;
    margin-top:10px;
    width:780px;
    /* background-color:green; */
        
    @media all and (max-width: 780px) {
        width:98vw;
        padding-left:10px;

    }
`;

export const TagsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:780px;
    /* background-color:green; */
    margin:auto;

    @media all and (max-width: 780px) {
        width:90vw;
        padding-left:10px;
        /* background-color:palevioletred; */

    }
`;

// export const Tags = styled.div`
//     color:white;
//     font-size:16;
//     font-weight:bold;
//     background-color:#7120F6;
//     border-radius:20px;
//     padding:7px 15px;
//     margin:8px;
// `;

export const Tags = styled.div`    
    border-radius:15px;
    box-shadow:0px 4px 10px 2px rgb(113,32,246,.2);
    padding:6px 25px;
    font-size:10px 15px;
    color:rgb(113,32,246);
    font-weight:500;
    margin:8px 10px;
`;

export const UploadButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:baseline;
    /* background-color:green; */
    width:780px;
    height: 80px;
    margin:auto;

    @media all and (max-width: 775px) {
        width:90%;
    }    
`;


export const UploadButton = styled.div`
background-color:#7120F6;
padding:10px 50px;
margin-right:40px;
margin-top:50px;
border-radius:30px;
color:white;
font-weight:500;

:hover{
    background-color:white;
    color:#7120F6;
    border:2px solid #7120F6;


    @media all and (max-width: 460px) {
        margin:auto;
    } 
    

  
}
`;


export const UploadInstructions = styled.div`
    display:flex;
    justify-content:center;
    padding-top:40px;
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


export const SuccessFailMessage = styled.div`
    display:flex;
    justify-content:center;
    padding-top:40px;
    /* background-color:green; */
    width:780px;
    margin:auto;
    text-align:center;
    color:${props => props.isRed === true?"red":"#7120F6"};
    font-size:20px;
    font-weight:500;

    @media all and (max-width: 775px) {
        width:90%;
    }    
`;


export const TermsOfUseGrey = styled.div`
    display:flex;
    justify-content:center;
    color:grey;
    font-size:18px;
    padding:5px;
`;


export const TermsOfUseLink = styled.div`
    /* display:flex;
    justify-content:center; */
    margin-left:8px;
    color:#7120F6;
`;


export const FollowUploadIntructions = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-left:auto;
    background-color:red;
    color:#7120F6;
    
`;




export const UploadInstructions2 = styled.div`
    display:flex;
    justify-content:center;
    padding-top:40px;
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

