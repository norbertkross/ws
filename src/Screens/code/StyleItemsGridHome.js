import styled from "styled-components"
// import BackGroundImage from "../../assets/brooke.jpg"
import BackGroundImage from "../../assets/widget-source-cover-pic.png"
import searchIcon from "../../assets/Search_96px.png"
import profilePic from "../../assets/Circled User Male_48px.png"

export const Header = styled.div`
    display:grid;
    justify-content:end;
    height: 180px;
    background-color:red;
    background-image: url(${BackGroundImage});
    background-position:center;
    background-size:cover;
`;

export const HeaderBlackContainer = styled.div`
    display:grid;    
    justify-content:end;
    height: 180px;
    width:100vw;
    background-color:black;
    opacity:.75;
`;

export const HeaderItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    /* justify-content:flex-end; */
    /* height: 180px; */
    width:100%;
    margin:0px;
    padding:0px;
    /* background-color:red; */
    position: absolute;
`;


export const HeaderItem = styled.div`
    /* background-color:green; */
    /* height: 20px; */
    margin:auto;
    flex-wrap:wrap;
    color:white;
    padding:${props=>props.lastItem===true?"10px 50px 10px 10px":"10px"};
    /* margin:auto; */
`;


export const BodyGrid = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    /* background-color:greenyellow; */
    gap:10px;
    margin:30px 10px;
`;


export const FlexItemsBody = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    box-shadow:0px 4px 8px 1px rgb(113,32,246,.3);
     border-radius:5px; 
     margin:15px 10px;
    /* background-color:hotpink; */
`;


export const WidgetImage = styled.div`
    height: 200px;
    width:250px;
    background-image: url('${props =>props.networkImage}');
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    border-radius:5px 5px 0px 0px;
    margin:8px 5px;

`;


export const WidgetName = styled.div`
    color:grey;
    color:rgb(113,32,246);
    width:250px;
    font-weight:bold;
    margin:10px 5px;
    text-align:center;
    /* background-color:blue; */
`;


export const WidgetDescription = styled.div`
    color:black;
    width:250px;
    height: 80px;
    /* overflow-x:hidden; */
    overflow-y:clip;
    /* background-color:red; */
    /* font-weight:400; */
    margin:8px 5px;
    text-align:center;
`;


export const WidgetCategory = styled.div`
    color:grey;
    font-weight:300;
    padding:10px 15px;
    font-weight:350;
    text-align:end;
`;


export const AbouGrids = styled.div`
    color:grey;
    padding-top:50px;
    font-size:30px;
    font-weight:400;
    text-align:center;
`;


export const Padd = styled.div`
    height: 150px;
`;



export const SearchIcon = styled.div`
    /* justify-self:flex-end; */
    height: 40px;
    width: 40px;
    margin-top: 10px;
    margin-right:30px;
    /* background-color:red; */
    background-image:url('${searchIcon}');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`;


export const SearchBoxContainer = styled.div`
    display:flex;
    justify-content:center;
    flex:wrap;
    /* background-color:green; */
    margin:auto;
    width:100vw;
`;


export const SearchBox = styled.input`
    /* background-color:burlywood; */
    box-shadow:0px 4px 8px 4px rgb(113,32,246,.15);
    width:50%;
    margin:auto 10px;
    color:grey;
    padding:20px 10px;
    border-radius:10px;
    outline:none;
    /* border: 2px solid grey; */
    border: 0px solid grey;
`;


export const SpaceForLoader = styled.div`
    /* background-color:burlywood;
    box-shadow:0px 4px 8px 4px rgb(113,32,246,.15);
    width:50%;
    margin:auto 10px;
    color:grey; */
    padding:20px 10px;

`;

export const FailedLoading = styled.div`
    display:flex;
    justify-content:center;
    width:90vw;
    color:red;
    font-size:21px;
    /* background-color:green; */
`;

export const FailedWord= styled.div`
    margin-left:10px;
    color:#7120F6;
    font-size:22px;
    font-weight:500;
    //background-color:red;
`;


export const Categories = styled.div`
    margin:20px 0px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;

export const ScrollOptionsBody = styled.div`
    margin:20px 0px;
    display:flex;
    justify-content:center;
`;

export const ScrollOptions = styled.div`
    display:block;
    width:100%;
    overflow:auto;
    overflow-y:hidden;

    ::-webkit-scrollbar{
        display:none;
    }
    `;

export const ScrollItem = styled.div`
    
    display:flex;
    /* flex-wrap:wrap; */
    /* margin:0; */
    padding:0;
    //background-color:green;
`;


export const CategoryTag = styled.div`
    color:${props=> props.isActive!== true?"#7120F6":"white"};
    font-size:16;
    font-weight:bold;
    background-color: ${props=> props.isActive!== true?"white":"#7120F6"};//#7120F6;
    border-radius:20px;
    border:${props=> props.isActive!== true?"1px solid #7120F6":"none"};
    padding:8px 20px;
    margin:8px;

    :hover{
        color:white;
        background-color:#7120F6;//#7120F6;        
    }


`;

export const PiKContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ProfilePic = styled.div`
    justify-content:flex-end;
    width:50px;
    height: 50px;
    padding-right: 50px;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('${profilePic}');
`;