import styled from "styled-components"
import bgImg from "../../assets/logo.svg"
// import backGround from "../../assets/widget-source-cover-pic.png"
import backGround from "../../assets/daniel-korpai-mxPiMiz7KCo-unsplash.jpg"
import MenuImage from "../../assets/Menu_50px.png"
import CloseImage from "../../assets/Multiply_52px.png"

export const Items = styled.div`
    flex-direction: row;
    padding: 0px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    `;


export const Item = styled.h4`
    color: white;
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
`

export const ItemGreen = styled.h4`
    color: #7120F6;
    font-size: 15px;
    padding-left: 20px;
    padding-right: 100px;
    `;


export const TopIcon = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    flex-direction: row;
    color:white;
    `;


export const Logos = styled.div`
    display: flex;
    flex-direction: row;
    `;


export const Logo = styled.p`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    margin-left: 20px;
    width: 60px;
    height: 40px;
    background-size:contain;
    background-position:center;
    `;


export const Logo2 = styled.h3`
    padding-top: 1px;
    padding-left: 20px;
    padding-right: 20px;
    width: 60px;
    height: 60px;
    color: white;
    `;


export const ForeMessage = styled.p`
    position: relative;
    padding-top: 20vh;
    font-size: 6vh;
    color: white;
    margin: auto;
    width: 60%;
    animation-name: animateForeMessage;
    animation-duration: 2000ms;
    animation-delay:300ms;

    @keyframes animateForeMessage{
    0%{
     left: -1000px;   
    }
    100%{
     left: 0px; 
        }
    }
    `;


export const GetStartedDiv = styled.div`
    padding-top: 100px;
    padding-bottom:50px;
    margin: auto;
    width: 60%;
    animation-name: animateGetStartedButton;
    animation-duration: 2000ms;
    animation-delay:600ms;
    position: relative;


    @keyframes animateGetStartedButton{
    0%{
     left: -500px;   
    }
    100%{
     left: 0px; 
    }
}

    `;


export const GetStarted = styled.div`
    width: 200px;
    display:flex;
    flex-wrap:wrap;
    border: none;
    //padding: 15px 40px;
    opacity: 1;
    background-color: rgb(85, 0, 241);
    border-radius: 30px;
    color:white;
    font-size: 18px;
    justify-content: center;
    font-weight: 500;
    position: relative;
    margin-bottom: 80px;
    box-shadow:0px 4px 10px 2px rgb(113,32,246,.4),
    `;


export const BaseGrid = styled.div`
    display: grid;
    background-color: teal;  
    grid-auto-rows: minmax(100vh,auto); 
    `;


export const BottomGrid = styled.div`
    display: grid;
    grid-auto-rows: minmax(100vh,auto);
    background-image: url(${backGround});
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    `;


export const TransparentBlack = styled.div`
    display: grid;
    grid-template-columns: 1fr 200fr;
    grid-auto-rows: minmax(100vh,auto);
    background-color: black;    
    /* opacity: .85; */
    opacity: .65;
    `;


export const Heading = styled.div`
    align-self: unset;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media all and (max-width: 760px) {
        display: none;   
    }

    `;


export const MenuIconBody = styled.div`
   display: flex; 
   justify-content: space-between;
    `;


export const MenuIcon = styled.div`
    margin: 20px;
    width: 35px;
    height: 43px;
    background-image: url("../../assets/Menu_50px.png");
    background-repeat: no-repeat;
    display: none;

    @media all and (max-width: 760px) {
        display: block;   
    }    
    `;


export const MenuIconClosed = styled.div`
    margin: 20px;
    width: 35px;
    height: 43px;
    background-image: url(${CloseImage});
    background-repeat: no-repeat;
    padding:5px;


    @media all and (max-width: 760px) {
        display: block;   
    }  

    `;


export const MenuIconOpenClose = styled.div`

    @media all and (max-width: 760px) {
        margin: 20px;
        width: 20px;
        height: 35px;
        padding-left:50px;
        background-image: url(${props=>props.openClose ===false?MenuImage:CloseImage});
        background-position:center;
        background-size:contain;
        background-repeat: no-repeat;
        display: block;   
    }        
    `;
    

export const DropDownLinkItem = styled.div`

@media all and (max-width: 760px) {
    padding: 15px;
    color: white;
}

`;    

export const DropDownLinkItemIndigo = styled.div`

@media all and (max-width: 760px) {
    padding: 15px;
       color: #7120F6;
}

`;    



export const DropdownHide = styled.div`
    opacity: .0;
    pointer-events: none;    
    `;


export const DropdownShow = styled.div`
        padding: 30px 50px;
        margin: 20px;
        margin-right: 60px;
        top: 40px;
        right: 0px;
        background-color: black;
        opacity: .8;
        pointer-events: all;
        position: absolute;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
`;


// NEW DROPDOWN

export const DropMain = styled.div`
    display:none;
    justify-content:end;

@media all and (max-width: 760px) {
    display:block;
    flex-direction:row;
}
`;


export const DropDownContent = styled.div`
    display:grid;
    position: relative;
    margin:auto;
    width:90%;
    background-color: ${props => props.openClose === false?"black":"#c09aff"};
    border-radius:3px;
    align-self:center;
    justify-content:end;
`;


export const DropDownContentPadding = styled.div`
    margin-right:5vw;
    justify-content:end;
    display: ${props => props.openClose === false?"none":"block"};
    animation-name: animateDropDown;
    animation-duration: 1000ms;
    position: relative;

    @keyframes animateDropDown{
    0%{
     left: -100px;   
    }
    100%{
     left: 0px; 
    }
}

`;


