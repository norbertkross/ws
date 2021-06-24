import styled from "styled-components"
import VisibilityIcon from "../../assets/Visible_48px.png"
import ProgressIndicator from "../../assets/circularProgressIndicator.gif"


export const CodeBlockDecoration = styled.div`
    display:grid;
    margin:auto;
    width:780px;
    padding: 20px;
    /* box-shadow:0px 4px 8px 1px rgb(113,32,246,.3);
    border-radius:8px; */


    @media all and (max-width: 780px) {
        width:90%;
    }

`;


export const WidgetPicture = styled.div`
    display:flex;
    justify-self:center;
    height: 400px;
    width:640px;
    /* background-color:green; */
    background-image:url(${props =>props.networkImage});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    margin:40px auto;

    box-shadow:0px 4px 10px 2px rgb(113,32,246,.2);
    border-radius:8px;

    @media all and (max-width: 645px) {
        width:90%;
        /* background-color:red; */

    }
`;



export const VisibleImage = styled.div`
    height: 25px;
    width: 20px;
    margin:0px 8px;
    background-image:url('${VisibilityIcon}');
    background-position:center;
    background-repeat:no-repeat;
    background-size:contain;

`;


export const ViewsIconLabel = styled.div`
    display:flex;
    justify-self:center;
    justify-content:flex-end;
    color:grey;
    font-weight:500;
    /* height: 400px; */
    width:640px;
    padding-right:20px;
    /* background-color:green; */
    background-image:url(${props =>props.networkImage});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    margin:40px auto;

    @media all and (max-width: 645px) {
        width:90%;
        /* background-color:red; */

    }
`;




export const WidgetName = styled.div`
    display:flex;
    justify-content:center;
    color:grey;
    font-size:30px;
    font-weight:600;
    margin:auto;
`;


export const WidgetDescription = styled.div`
    display:flex;
    justify-content:center;
    color:grey;
    font-size:18px;
    margin:auto;
    padding-top:15px;
`;


export const Yaml = styled.div`
    /* display:flex; */
    color:grey;
    font-size:30px;
    margin:auto;
    width:780px;
    border-radius:10px;


    @media all and (max-width: 780px) {
        width:90%;
    }
    /* margin:auto; */
`;


export const ByText = styled.div`
    color:#7120F6;
    font-size:18px;
    padding-right:10px;
    display:flex;
    font-weight:500;
`;


export const PosterName = styled.div`
    margin:auto;
    width:780px;
    display:flex;
    justify-content:flex-end;
    color:grey;
    font-size:20px;
    font-weight:500;
    padding:8px 15px;
    padding-right:20px;

    @media all and (max-width: 780px) {
        width:90%;
    }

`;


export const PosterLinks = styled.div`
    margin:auto;
    width:780px;
    display:flex;
    justify-content:flex-end;
    color:grey;
    font-size:20px;
    font-weight:500;
    padding:0px 0px 0px 15px;
    padding-right:20px;

    @media all and (max-width: 780px) {
        width:90%;
    }

`;


export const GitAndOtherLink = styled.div`    
    border-radius:15px;
    /* box-shadow:0px 2px 8px 0px #7120F6; */
    box-shadow:0px 4px 10px 2px rgb(113,32,246,.2);
    padding:6px 25px;
    font-size:15px;
    color: white;
    background-color: ${props=>props.isActive === false ? "grey":"rgb(113,32,246)"};
    font-weight:500;
    margin-right:0px;
`;

export const DownLoadButton = styled.div`
    color:white;
    padding:10px 30px;
    background-color:#7120F6;
    border-radius:7px;
    box-shadow:0px 2px 8px 0px #7120F6;
`;

export const CopyItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right:10px;
`;



export const CopyItemDesign = styled.div`
    border: 2px solid ${props => props.hasCopied === true? "rgb(113,32,246,.6)" : "rgb(113,32,246,.4)"} ;
    //color:#7120F6;
    color:${props => props.hasCopied === true? "rgb(113,32,246,.6)" : "rgb(113,32,246,.4)"} ;
    padding:2px 10px;
    border-radius:4px;
`;

export const CircularProgressIndicator = styled.div`
    height: 20px;
    width:20px;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('${ProgressIndicator}');
    background-size:contain;
`;