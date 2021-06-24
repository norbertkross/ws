import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/loading";
import { SpaceForLoader } from "../code/StyleItemsGridHome";
import { GetInTouch, LoginRegisterBody, SubInTouch,LoginRegisterContainer,MyInput, LoginSpace, Button, SwitchAuthenticationStateContainer,SwitchAuthenticationStateItem } from "./styleLoginRegister";
import {register,loginUserRequest} from "../requests/LoginSignUpRequests"
import { storeUserEmailPcid,storeUsernameAndUid } from "./storeDataToBrowser";
// import { setKeyPair } from "./storeDataToBrowser";


function LoginRegister() {

    const history = useHistory();

    const [signIn, changeSignIn] = useState(true)
    const [signUp, changeSignUp] = useState(false)
    const [isLoading, startLoading] = useState(false)
    const [userdetails, setUserDetail]  = useState({username:"", email:"",password:""})

    // Validate fields

    // const [inputErrMsguser, setInputErrMsg] = useState("")
    // const [inputErrMsgName, setInputErrMsg] = useState("")
    // const [inputErrMsgPassword, setInputErrMsg] = useState("")
    // const [noError, setNoError] = useState(false)

    function onSignIn(){
        changeSignIn(true);
        changeSignUp(false);
    }


    function onSignUp(){
        changeSignIn(false);
        changeSignUp(true);
    }


    function updateUsername(e){
        e.preventDefault()
        setUserDetail({...userdetails,username:e.target.value})
    }


    function updateMail(e){
        e.preventDefault()
        setUserDetail({...userdetails,email:e.target.value})
        // if(e.target.value.toString().trim() != ""){
        //     if(e.target.value.toString().includes()){}
        // }
    }


    function updatePassword(e){
        e.preventDefault()
        setUserDetail({...userdetails,password:e.target.value})
    }


    function signUpUser(){
        if(userdetails.username.trim() !== ""
            && userdetails.email.trim() !== "" 
            && userdetails.password.trim() !== "" 
        ){
            if(isLoading !== true){

            // make Request here
            startLoading(true)
                register(userdetails.username,userdetails.email,userdetails.password)
                .then((__)=>{
                   console.log(__); 
                   startLoading(false)
                   
                   if(__[0]["msg"] !== null){
                      //console.log(__);  
                    if(__.toString()[0] === "<"){
                        alert("Request failed")
    
                    } else{
                        alert(__[0]["msg"].toString())
                    }

                    
                   }else{
                    alert("Request failed")
                   }

                })

            }else{
                alert("Working ... wait.")
            }

        }else{

            // No field should be empty
            alert("No field should be empty")
        }
    }




    function loginUser(){
        if(userdetails.email.trim() !== "" 
            && userdetails.password.trim() !== "" 
        ){
            if(isLoading !== true){

            // make Request here
            startLoading(true)
            loginUserRequest(userdetails.email,userdetails.password)
                .then((__)=>{
                  //console.log(__); 
                   startLoading(false)
                if(__ !== null && __.length !== 0){


                    if(__.toString()[0] === "<"){
                        alert("Request failed")
    
                    } else{
                   
                        if(__[0]["msg"] !== null){
                            if(__[0]["msg"] === "Successful"){
                                storeUserEmailPcid(__[0]["pcid"],__[0]["email"])
                                storeUsernameAndUid(__[0]["username"],__[0]["uid"])
                             //console.log("You have logged in successfully");
                             goToUpload()
                            }else{
                             alert(__[0]["msg"].toString())
                            }
                        }else{
                         alert("Request failed")
                        }

                    }

 

                }else{
                    alert("Could not process request")
                }
                })

            }else{
                alert("Working ... wait.")
            }

        }else{

            // No field should be empty
            alert("No field should be empty")
        }
    }

    function goToUpload(){
        history.replace("/upload")
    }



    return (

        <LoginRegisterBody>
            <GetInTouch>
            We're glad to have you on our platform 
            </GetInTouch>

            <SubInTouch>
            Login or register to be able to post and share your ideas  
            </SubInTouch>

            <SwitchAuthenticationStateContainer>                

                <Link style={{textDecoration:"none"}}>
                <SwitchAuthenticationStateItem isActive={signIn} onClick={()=>{onSignIn()}}>
                    Sign in 
                </SwitchAuthenticationStateItem>
                </Link>

                <Link style={{textDecoration:"none"}}>
                <SwitchAuthenticationStateItem  isActive={signUp} onClick={()=>{onSignUp()}}>
                    Sign up
                </SwitchAuthenticationStateItem>
                </Link>

            </SwitchAuthenticationStateContainer>

            <div style={{height:"60px"}}></div>

            {signIn ===true?

            <div>
            <LoginRegisterContainer>
                <MyInput value={userdetails.email} onChange={(e)=>updateMail(e)} placeholder="       username / email"></MyInput>
            </LoginRegisterContainer>
            {/* <InputErrMsg>{inputErrMsguser}</InputErrMsg> */}
                <div style={{height:"15px"}}></div>
            <LoginRegisterContainer>
                <MyInput value={userdetails.password} onChange={(e)=>updatePassword(e)} placeholder="       Password" type="password"></MyInput>
            </LoginRegisterContainer>
                 

            {isLoading === true?<SpaceForLoader>      
                    <Loading/>
                </SpaceForLoader>:<div style={{height:"30px"}}/> 
            }

            <LoginSpace>
                <Button onClick={(e)=>loginUser()}>Sign in</Button>
            </LoginSpace>
            
            <div style={{height:"30px"}}/> 

            </div> 
            
               :

            <div>
            <LoginRegisterContainer>
                <MyInput value={userdetails.username} onChange={(e)=>updateUsername(e)} placeholder="       username"></MyInput>
            </LoginRegisterContainer>

                <div style={{height:"15px"}}></div>
            <LoginRegisterContainer>
                <MyInput value={userdetails.email} onChange={(e)=>updateMail(e)} placeholder="       email"></MyInput>
            </LoginRegisterContainer> 

                <div style={{height:"15px"}}></div>
            <LoginRegisterContainer>
                <MyInput value={userdetails.password} onChange={(e)=>updatePassword(e)} placeholder="       Password" type="password" ></MyInput>
            </LoginRegisterContainer>

            {isLoading === true?<SpaceForLoader>      
                    <Loading/>
                </SpaceForLoader>:<div style={{height:"30px"}}/> 
            }

            <LoginSpace>
                <Button onClick={(e)=>signUpUser()}>
                    Sign up                     
                </Button>
            </LoginSpace>
                
                <div style={{height:"30px"}}/> 

            </div>
            }



        </LoginRegisterBody>

    )
}



export default LoginRegister