import styled from "styled-components"
import pImage from "../../assets/Circled User Male_48px.png"


export const LogoBody = styled.div`
    display:grid;
    justify-content:center;
`;

export const LogoLabel = styled.div`
    display:grid;
    justify-content:center;
    /* color: green;*/
    color: #7120F6;
    /* color:grey; */
    font-size:16px;
    font-weight:500;    
`;


export const ProfileImage = styled.div`
    height: 60px;
    width: 60px;
    /* background-color:whitesmoke; */
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('${pImage}');
`;


export const TagsLabel = styled.div`
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

export const BlockDecoration = styled.div`
    display:grid;
    margin:auto;
    width:780px;
    padding: 20px;

    @media all and (max-width: 780px) {
        width:90%;
    }
`;


export const LinkStyleDecoration = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    color: #7120F6;
    font-weight:400;
    padding:0px  0px 5px;
    `;


export const UpdateProfileButton = styled.div`
    display:flex;
    justify-content:center;
    padding:40px;
`;

export const UpdateButton = styled.div`
    font-weight:500;
    font-size:18;
    color:white;
    background-color: #7120F6;
    padding:10px 30px;
    border-radius:20px;
    box-shadow:0px 4px 10px 2px rgb(113,32,246,.2);
`;