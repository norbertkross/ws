import React,{useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CodeBlockDecoration, WidgetName, Yaml } from '../code/codeDetailsStyles';
import { Header, HeaderBlackContainer, HeaderItem, HeaderItems, SpaceForLoader } from '../code/StyleItemsGridHome';
import { Logo, Logo2, Logos } from '../home-sections/homeScreenStyled';
import bgImg from "../../assets/file-picture.png"
import CodeMarkDown from '../code/codeMarkDown';
import Footer from '../home-sections/footer';
import { UploadClickContainer,UploadPicture,UploadText,CodeInput,CodeTagsInput,UploadButtonContainer, UploadButton, UploadInstructions, CoverCodeTagsInput,TagsLabel, Tags, TagsContainer,WidgetNameInput, SuccessFailMessage, TermsOfUseGrey, TermsOfUseLink} from './UploadStyle';
import Loader from '../../components/loading';
import { baseUrl } from "../requests/baseUrl";
import { verifyIfLoggedInAlready } from '../requests/verifyIsLoggedIn'
import WaitingToVerify from '../../components/waitingToVerify';



const axios = require("axios");


export default function UploadScreen() {
    return (
        <div>
            <Head/>
            <Body/>
        </div>
    );
}




export const Head = function Head(){
    return (
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
            {/* <Link to="/" style={{textDecoration:"none"}}>
            <HeaderItem>Category</HeaderItem>
            </Link> */}
            {/* <Link to="/upload" style={{textDecoration:"none"}}>
            <HeaderItem>Upload</HeaderItem>
            </Link> */}
            <Link to="/" style={{textDecoration:"none"}}>
            <HeaderItem lastItem={true}>Home</HeaderItem>
            </Link>
            </div>
        </HeaderItems>
    </Header>
    )
}



export const Body =  function Body() {

    const [myImage,changeImage] = useState(null)
    const [myUploadImage,changeMyUploadImage] = useState(null)
    const [isImage,switchIsImage] = useState(false)
    const [name,setName] = useState(null)
    const [isLoading,changeLoadingStatus] = useState(false);
    const [successFailMessage,setMessage] = useState({value:"",isRed:false});
    // const [progress,setProgress] = useState(0);


    // Inputs
    const [code,updateCode] = useState("")
    const [example,updateExample] = useState("")
    const [widgetName,updateWidgetName] = useState("")
    const [codetags,updateTags] = useState("")
    const [description,updateDescription] = useState("")
    const [isLoggedIn,changeloginSuccessState] = useState(false)
    var hiddenInputRef = React.createRef()    

    
    const history = useHistory()
    var storedUsername = window.localStorage.getItem("widgetSource_username")
    var storedUid = window.localStorage.getItem("widgetSource_uid")
    useEffect(()=>{
        var storedEmail = window.localStorage.getItem("widgetSource_email")
        var storedPcid = window.localStorage.getItem("widgetSource_pcid")

        if(storedEmail !== null && storedPcid !== null){
            //               console.log("data: ");
            //    console.log(data);

            
            // verify on server to see if this pc has verified and logged in b4
            verifyIfLoggedInAlready(storedEmail,storedPcid).then((__)=>{
                if(__ !== null && __.length !== 0){
                    if(__[0]["msg"] === "Successful"){
                        //The Verification was Successful
                        changeloginSuccessState(true)                        
                    }else{
                        goToAuth() 
                    }
                }else{
                    goToAuth() 
                }
            },);
            
        }else{
            //console.log(`No Data Available in storage [{}]`);
           goToAuth()
        }

    },[])

    
    function goToAuth(){
        //history.push("/widgets")
        history.replace("/auth")
    }

     function clickInput(e){
         hiddenInputRef.current.click()
     }   


     // For picking file
     function inputChanged(e){                    
        if(e.target.files[0] != null){
            var src =  URL.createObjectURL(e.target.files[0])  
            var type = e.target.files[0].type 
            var typeAttributesList = type.split("/")

            if(typeAttributesList[0] === "image"){
               
               setName(e.target.files[0].name)
                changeImage(src)
                changeMyUploadImage(e.target.files[0])
                switchIsImage(true)
            }
        }                               
     }   


    //  Update Input 

     // Update Tags 
    function onTagInputChange(e){
        e.preventDefault()
        updateTags(e.target.value.trim())
    }    



     // Update code example
    function onExampleInputChange(e){
        e.preventDefault()
        updateExample(e.target.value)
        //updateCode(e.target.value.replaceAll("```","\\`\\`\\`"))
    }    


     // Update code input
    function onCodeInputChange(e){
        e.preventDefault()
        updateCode(e.target.value)
        //updateCode(e.target.value.replaceAll("```","\\`\\`\\`"))
    }    


     // Update description input
    function onDescriptionInputChange(e){
        e.preventDefault()
        updateDescription(e.target.value.trim())
    }    


     // Update item name input
    function onItemNameInputChange(e){
        e.preventDefault()
        updateWidgetName(e.target.value.trim())
    }    



    // uploadData
    function uploadInputData(){
        setMessage({value:"",isRed:true})

        if(code !== "" && widgetName !== "" && description !== "" && codetags !== "" && myImage !== null){
            changeLoadingStatus(true)
            uploadCodeAndImage(
                myUploadImage,storedUid,storedUsername,
                widgetName,description,example,code,codetags
            ).then((data)=>{

               changeLoadingStatus(false)
               if(data !== [] && data !== null){
                // console.log("data: ");
                // console.log(data);           
                
                if(data.toString()[0] === "<"){
                
                    setMessage({value:`Failed`,isRed:true})

                } else{
                //     updateResults(items);
                // }                
                
                if(data[0]["msg"] === "Successful"){
                    setMessage({value:"Successfully Uploaded. You'll see it in the items cataloge once the admin approves it",isRed:false})

                }else{
                    setMessage({value:`${data[0]["msg"]}`,isRed:true})
                 }

                }

               }else{
                setMessage({value:`Failed`,isRed:true})
               }

              });
        }else{
            //"no field should be empty"
            setMessage({value:"No field should be empty",isRed:true})
        }
    }


    function removeSpacesInArray(arr){
        var i;
        var newArray = []
        for(i = 0; i <= arr.length-1;i++){            
            if(arr[i].trim() !== ""){
                newArray.push(arr[i].trim())
            }
        }

        return newArray
    }

    //#DAC3FF
    return (
        
            <div> 

            {  isLoggedIn !== true ?  <div>
        {/* Show Loader while the user is being authenticacted    */}
                 <WaitingToVerify/>   
                </div> :

        /* Show this section if user has been authenticacted */
                <div> 
              <UploadClickContainer isImage={isImage} image={myImage} onClick={(e) =>clickInput(e)}>
                  <UploadPicture isImage={isImage} image={bgImg}/>
                  <UploadText isImage={isImage}> Upload</UploadText>  
              </UploadClickContainer>
              <UploadInstructions> {name}   </UploadInstructions> 
              <input type="file" ref={hiddenInputRef} onChange={(e) =>inputChanged(e)} style={{display:"none"}}/>

              <div style={{height:"60px"}}></div>

              <WidgetName>
                  Write you code here
              </WidgetName>

            <UploadInstructions>Your code should be simple and precise.</UploadInstructions>  

           <TermsOfUseGrey> You can <Link style={{textDecoration:"none"}} to={`/widgets/Micheal%20Jackson%20WIdget%20/5`}> <TermsOfUseLink>use this as a guideline</TermsOfUseLink> </Link> </TermsOfUseGrey>
            <div style={{height:"15px"}}/>
      

            <TagsLabel>
                Code
            </TagsLabel>
            <div style={{height:"15px"}}/>


            <CodeInput placeholder=" ~~~  
            Code  
            ~~~" onChange={(e)=>onCodeInputChange(e)}>                
            </CodeInput>

            <div style={{
                height: 20.0,
            }}> </div> 

            <TagsLabel>
                Example
            </TagsLabel>

            <div style={{height:"15px"}}/>

            <CodeInput placeholder=" ~~~  
            example code  
            ~~~" onChange={(e)=>onExampleInputChange(e)}>                
            </CodeInput>

            <div style={{
                height: 20.0,
            }}> </div> 

            <TagsLabel>
                Item name
            </TagsLabel>

            <CoverCodeTagsInput>               
            <WidgetNameInput placeholder="  Item name" onChange={(e)=>onItemNameInputChange(e)}></WidgetNameInput>
            </CoverCodeTagsInput>
            
            <TagsLabel>
                Description
            </TagsLabel>

            <CoverCodeTagsInput>
            <CodeTagsInput placeholder="  Description and how to use" onChange={(e)=>onDescriptionInputChange(e)}></CodeTagsInput>
            </CoverCodeTagsInput>

            <TagsLabel>
                Tags
            </TagsLabel>

            
            <TagsContainer>
            
                { codetags !== "" && removeSpacesInArray(codetags.trim().split(",")).map((item,index)=>{
                return <Tags key={index}> {item.trim()}</Tags>            
                })}
                

        <div style={{height:"40px"}}></div>
            </TagsContainer>

            <CoverCodeTagsInput>
            <CodeTagsInput placeholder="  eg. Flutter,CheckBox,React,UI" onChange={(e)=>onTagInputChange(e)}></CodeTagsInput>
            </CoverCodeTagsInput>

            <div style={{height:"100px"}}></div>

            <Yaml>Code Preview </Yaml>

            <CodeBlockDecoration>
            <CodeMarkDown markdown={code}/>
            </CodeBlockDecoration>

            <div style={{height:"100px"}}></div>
            <Yaml> Example Preview </Yaml>

            <CodeBlockDecoration>
            <CodeMarkDown markdown={example}/>
            </CodeBlockDecoration>            

            <UploadButtonContainer>

               { isLoading === true?<SpaceForLoader>          
                    <Loader/>
                </SpaceForLoader>:<div/> 
                }
            <UploadButton onClick={(e)=>uploadInputData()}>
                Upload
            </UploadButton>
            </UploadButtonContainer>

            <div style={{height:"20px"}}/>

            <SuccessFailMessage isRed={successFailMessage.isRed}> {successFailMessage.value} </SuccessFailMessage>  

            <div style={{height:"200px"}}/>

            <TermsOfUseGrey>By using this website, you have agreed to  <Link style={{textDecoration:"none"}} to="/terms-of-use"> <TermsOfUseLink>Our Terms Of Use</TermsOfUseLink> </Link> </TermsOfUseGrey>
            
            </div> }
            <Footer/>

        </div>
    );






    function uploadCodeAndImage(imageFile,posterid,postername,widgetname,description,example,code,tags){

        var base = baseUrl;

         const formData = new FormData();
         formData.append("posterid",posterid.toString())
         formData.append("postername",postername.toString())
         formData.append("widgetname",widgetname.toString())
         formData.append("description",description.toString())
         formData.append("example",example.toString())
         formData.append("code",code.toString())
         formData.append("tags",tags.toString())
         formData.append("imageFile",imageFile,name)
     
         // Make a request 
        var response = axios.post(base+"controller/sendcodes",formData,{
            onUploadProgress: uploadProgressEvent => {
                //console.log("progress "+Math.round(uploadProgressEvent.loaded/uploadProgressEvent.total *100)+" %")
            }
        });
     
          return response.then(res=>res.data)
           .catch(error => [])
     }
     
}


// const pubspec = `*Here is some JavaScript code:*

// ~~~dart
//   Widget build(BuildContext context) {            
//     return Scaffold(
//       appBar: AppBar(                
//         title: Text("Check Button"),
//       ),
//       body: Center(                
//         child: ReUseButtonWithTextAndArrow(),
//     );
// ~~~
// `


