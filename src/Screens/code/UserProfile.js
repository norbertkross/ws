import React,{useEffect, useState} from 'react'
import { TagsLabel } from '../upload/UploadStyle'
import { Logos,Logo,Logo2,} from "../home-sections/homeScreenStyled.js";
import {Header, HeaderItems, HeaderItem, HeaderBlackContainer,} from './StyleItemsGridHome'
import { LogoBody,LogoLabel,ProfileImage, LinkStyleDecoration, UpdateProfileButton, UpdateButton } from './UserProfileStyle'
import { LoginRegisterContainer,MyInput} from '../Authentication/styleLoginRegister'
import { Link } from 'react-router-dom'
import axios from "axios"
import {baseUrl} from "../requests/baseUrl"
import {getStoredKey} from "../Authentication/storeDataToBrowser";
import Loader from '../../components/loading';


export default function UserProfile() {

    const [githubValue,setGithubValue] = useState("")
    const [otherValue,setOtherValue] = useState("")
    const [loaderIndicator,setLoadState] = useState(true)
    const [data,setData] = useState([])
    const [nameof,setName] = useState("")


    useEffect(()=>{
        fetchUserDetails().then((newData)=>{
            setLoadState(false)
            var uname = getStoredKey("widgetSource_username")
            setName(`${uname}`)
            setData(newData)
            if(newData.length >0){
                setGithubValue(newData[0]["githublink"])
                setOtherValue(newData[0]["otherlink"])                
            }
        });
    },[])



    return (
        <div>

<Header>                
        <HeaderBlackContainer/>

        <HeaderItems>
            <div style={{marginRight:"50px"}}>
            <Logos>
            <Logo></Logo>
            <Logo2>WidgetSource</Logo2>
            </Logos>
            </div> 

            <div style={{display:"flex",justifyContent:"end",marginTop:"10px"}}>

            <Link to="/" style={{textDecoration:"none"}}>
            <HeaderItem lastItem={true}>Home</HeaderItem>
            </Link>
            </div>
        </HeaderItems>
    </Header>


            <div style={{
                height:"30px",
            }}/>            

            <LogoBody>
                <ProfileImage/>
            </LogoBody>
                
            {loaderIndicator === true? <Loader/>  :
            
            data.length <=0?
            <div style={{
                padding:"30px 10px",
                display:"grid",                
                justifyContent:"center",
                fontWeight:"bold",
                color:"red",
            }}>

            <LogoBody>
            No data Available
            </LogoBody>

            <div style={{
                padding:"20px 10px",
            }}/>

            <LoginRegisterContainer>
                <MyInput value={githubValue} onChange={(e)=>{
                    setGithubValue(e.target.value)
                }} placeholder="Github"></MyInput>
            </LoginRegisterContainer>

            <div style={{
                paddingTop:"15px",
            }}>

            </div>

            <TagsLabel></TagsLabel>

            <LoginRegisterContainer>
                <MyInput value= {otherValue} onChange={(e)=>{
                    setOtherValue(e.target.value)
                }} placeholder="Other Links"></MyInput>
            </LoginRegisterContainer>

            <UpdateProfileButton>
                <Link style={{textDecoration:"none",color:"#7120F6",display:"flex",}}>
                <UpdateButton onClick={()=>{
                    setLoadState(true)
                    AddNewUserDetails(githubValue,otherValue).then((__)=>{
                        fetchUserDetails().then((newData)=>{
                            setLoadState(false)
                           // var uname = getStoredKey("widgetSource_username")
                          //setName(uname.toString())
                            setData(newData)
                            if(newData.length >0){
                                setGithubValue(newData[0]["githublink"])
                                setOtherValue(newData[0]["otherlink"])                
                            }
                        });                        
                    });
                }}>
                Add new
                </UpdateButton>
                </Link>
            </UpdateProfileButton> 

            </div>
            :
            <div>
            <LogoLabel>
            {nameof}
            </LogoLabel>

            <div style={{height:"50px",}}/>

            <TagsLabel>Github</TagsLabel>

            <TagsLabel>
            <LinkStyleDecoration>
            <a href={data[0]["githublink"]} style={{textDecoration:"none",color:"#7120F6"}}>
            {data[0]["githublink"]}
            </a>
            </LinkStyleDecoration>
            </TagsLabel>

            <LoginRegisterContainer>
                <MyInput value={githubValue} onChange={(e)=>{
                    setGithubValue(e.target.value)
                }} placeholder="Github"></MyInput>
            </LoginRegisterContainer>

            <div style={{
                paddingTop:"15px",
            }}>

            </div>

            <TagsLabel>Other Links</TagsLabel>

            <TagsLabel>
            <LinkStyleDecoration>
            <a href={data[0]["otherlink"]} 
            style={{textDecoration:"none",color:"#7120F6",display:"flex",}}>            
              {data[0]["otherlink"]}
            </a>    
            </LinkStyleDecoration>
            </TagsLabel>

            <LoginRegisterContainer>
                <MyInput value= {otherValue} onChange={(e)=>{
                    setOtherValue(e.target.value)
                }} placeholder="Other Links"></MyInput>
            </LoginRegisterContainer>

            <UpdateProfileButton>
                <Link style={{textDecoration:"none",color:"#7120F6",display:"flex",}}>
                <UpdateButton onClick={()=>{
                    setLoadState(true)
                    AddNewUserDetails(githubValue,otherValue).then((__)=>{
                        fetchUserDetails().then((newData)=>{
                            setLoadState(false)
                            setData(newData)
                            if(newData.length >0){
                                setGithubValue(newData[0]["githublink"])
                                setOtherValue(newData[0]["otherlink"])                
                            }
                        });                        
                    });
                }}>
                Update
                </UpdateButton>
                </Link>
            </UpdateProfileButton>
            </div>
            }
        </div>
    )
}


function fetchUserDetails(){

    var posterId = ""

    posterId = getStoredKey("widgetSource_uid")

    const formData = new FormData();

    //formData.append("posterid",`1`)
    formData.append("posterid",`${posterId}`)

    var response = axios.post(`${baseUrl}controller/userprofileget`,formData)

    return response.then(res=>res.data)
    .catch(error => [])
}


function AddNewUserDetails(githublink,otherlink){

    var posterId = ""

    posterId = getStoredKey("widgetSource_uid")

    const formData = new FormData();

    formData.append("posterid",`${posterId}`)
    formData.append("githublink",`${githublink}`)
    formData.append("otherlink",`${otherlink}`)

    var response = axios.post(`${baseUrl}controller/userprofile`,formData)

    return response.then(res=>res.data)
    .catch(error => [])
}
