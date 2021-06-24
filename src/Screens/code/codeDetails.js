import React,{useState,useEffect} from 'react'
import Footer from '../home-sections/footer'
import { CodeBlockDecoration, WidgetName, WidgetPicture,WidgetDescription, PosterName, ByText, ViewsIconLabel, VisibleImage, DownLoadButton, CopyItem, CopyItemDesign, PosterLinks, GitAndOtherLink,CircularProgressIndicator } from './codeDetailsStyles'
import CodeMarkDown from './codeMarkDown'
import { ItemsHeader } from './itemsGridHome'
import {getCodeById} from '../requests/get_all_code_ui';
import { Tags, TagsContainer } from '../upload/UploadStyle'
import { FailedLoading, SpaceForLoader } from './StyleItemsGridHome'
import Loader from '../../components/loading';
import { Link } from 'react-router-dom'
import axios from "axios"
import  {baseUrl} from "../requests/baseUrl"



 function CodeDetails(props) {


  const [results,updateResults] = useState([null]);
  const [isLoading,changeLoadingStatus] = useState(false);
  const [copyExample,copyExampleStatus] = useState(false);
  const [copyCode,copyCodeStatus] = useState(false);
  const [posterUrlLoader,setLoader] = useState(false)
  const [tapIndex,setTapIndex] = useState(-1)



  function fetchUserUrl(posterId,linkId,index){

    setLoader(true) 
    setTapIndex(index)
    const formData = new FormData();

    formData.append("posterid",`${posterId}`)

    var response = axios.post(`${baseUrl}controller/userprofileget`,formData)

    return response.then(res=>{
      setLoader(false)
      setTapIndex(-1) 
    var data =  res.data
    var url = data[0][`${linkId}`] 
    var formedLink = `${url}`.trim() !=="" && `${url}` !== "undefined"?`//${url}`:"/page-not-found"
     window.open(formedLink,"_blank",).focus()
    })
    .catch(error => [])    
}


  useEffect(() => {

    let mounted = true;

      changeLoadingStatus(true);

      getCodeById(props.match.params.name,props.match.params.id)
      .then((items)=>{
       // console.log(items);
          if(mounted){

            if(items.toString()[0] === "<"){
              // console.log(items);
              // console.log(items.toString()[0]);
              updateResults([]);

          } else{
              updateResults(items);
              // console.log(items);
            }
            //updateResults(items);
          }
          changeLoadingStatus(false)
        });

      return () => mounted = false;

    },[props.match.params.name,props.match.params.id]);


    var codeAndData = results.length !==0 ? results.map((res,index)=>{
    // console.log(results);
     return res !== null? <div key={0}>
      <WidgetPicture networkImage={results[0]["widgetimage"]}/>
      
      <WidgetName> {results[0]['widgetname']} </WidgetName>
       
      <WidgetDescription>
        { results[0]['description'] }
      </WidgetDescription>
            

      <div style={{height:"60px"}}/>
      <WidgetName> Code </WidgetName>

      <CodeBlockDecoration>
      <Link style={{textDecoration:"none",}}>
      <CopyItem> <CopyItemDesign hasCopied={copyCode} onClick={(e)=>{
        navigator.clipboard.writeText(`${results[0]['code']}`)
        copyCodeStatus(true)
        }} >{copyCode === true ?  "Copied!" : "Copy"}</CopyItemDesign> 
        </CopyItem>
        </Link>        
      <CodeMarkDown markdown={results[0]['code']}/>
      </CodeBlockDecoration>


      <div style={{height:"60px"}}/>
      <WidgetName> Usage </WidgetName>
      
      <CodeBlockDecoration>
        <Link style={{textDecoration:"none",}}>
      <CopyItem onClick={(_)=>{}}> <CopyItemDesign hasCopied ={copyExample} onClick={(e)=>{
        navigator.clipboard.writeText(`${results[0]['example']}`);
        copyExampleStatus(true)
        }} > {copyExample === true ?  "Copied!" : "Copy"}</CopyItemDesign>
       </CopyItem>
       </Link>
      <CodeMarkDown markdown={results[0]['example']}/>
      </CodeBlockDecoration>

      
      <ViewsIconLabel>
      <a style={{textDecoration:"none"}} href={results[0]['linktofile']} download>
      <DownLoadButton>Download</DownLoadButton>
      </a>
      </ViewsIconLabel>

      <div style={{height:"10px"}}/>
    <ViewsIconLabel>
        views
      <VisibleImage/>
       {returnViews(results[0]['views'])}</ViewsIconLabel>  

      <div style={{height:"20px"}}/>

        <TagsContainer>
            
            { results[0]['tags'] !== "" && removeSpacesInArray(results[0]['tags'].trim().split(",")).map((item,index)=>{
            return <Tags key={index}>{item.trim()}</Tags>
            //  <Tags key={index}> 
            //{item.trim()}
            //  </Tags>            
            })}
            
        </TagsContainer>

      <div style={{height:"100px"}}/>
     <PosterName>
       <ByText>by </ByText> { results[0]['postername'] }
     </PosterName>
     <PosterName>
       <ByText>Get in touch with </ByText> { results[0]['postername'] }
     </PosterName>

    <div style={{height:"10px"}}/>

     <PosterLinks>
       <Link style={{
         textDecoration:"none",
       }}>
     <GitAndOtherLink isActive={tapIndex ===-1 || tapIndex ===0? true:false} onClick={(_)=>{
       
       if(posterUrlLoader === false){
        fetchUserUrl(results[0]["posterid"],"githublink",0);
       }

     }}>

       {posterUrlLoader !== true ? "Github": tapIndex ===0? <CircularProgressIndicator/> : "Github"}

     </GitAndOtherLink>
     </Link>

     <div style={{width:"15px"}}/>

     <Link style={{
         textDecoration:"none",
       }}>
     <GitAndOtherLink isActive={tapIndex ===-1 || tapIndex ===1? true:false} onClick={(_)=>{
      
      if(posterUrlLoader === false){
        fetchUserUrl(results[0]["posterid"],"otherlink",1);
      }            
     }}> 

       {posterUrlLoader !== true? "Other": tapIndex ===1? <CircularProgressIndicator/> : "Other"}
       
     </GitAndOtherLink>
     </Link>
     </PosterLinks>

     </div>
     : <div key={0}/>
    }):<div/>

    

    return (
        <div>
          
            <ItemsHeader/>
            {isLoading !== false && <SpaceForLoader>          
                <Loader/>
            </SpaceForLoader>
            }

            {(results.length !== 0) &&  codeAndData}

            {results.length <= 0 && <div style={{paddingTop:"60px"}}> <FailedLoading>Could not load item</FailedLoading></div>}

            <div style={{height:"200px"}}/>
            <Footer/>
        </div>
    )
}



function removeSpacesInArray(arr){
  var i;
  var newArray = []
  for(i = 0; i <= arr.length-1;i++){
      //console.log(arr[i]);
      if(arr[i].trim() !== ""){
          newArray.push(arr[i].trim())
      }
  }

  return newArray
}


function returnViews(views){

  var newViews ="";

  if(views.toString().length <=3){

    return views

  }else if(views.toString().length >3 && views.toString().length <7){

    var len = views.toString().length - 3;

    for(var i =0; i<=len-1;i++){
      newViews = newViews + views.toString()[i];
    }

    return newViews +" k"
  
  }
   else if(views.toString().length >=7 && views.toString().length <11){

    var lenM = views.toString().length - 6;

    for(var iM =0; iM<=lenM-1;iM++){
      newViews = newViews + views.toString()[iM];
    }

    return newViews +" M"

  }else {

    var lenB = views.toString().length - 9;

    for(var iB =0; iB<=lenB-1;iB++){
      newViews = newViews + views.toString()[iB];
    }

    return newViews +" B"
  }
}



export default CodeDetails



// // Did you know you can use tildes instead of backticks for code in markdown? ���
// const markdown = `*Here is some JavaScript code:*

// ~~~dart

// import 'package:flutter/material.dart';
// import 'package:w2schools/Components/reUseButton.dart';


// class TestButton extends StatefulWidget {


//   @override
//   _TestButtonState createState() => _TestButtonState();
// }

// class _TestButtonState extends State<TestButton> {

//   @override
//   Widget build(BuildContext context) {        
    
//     return Scaffold(
//       appBar: AppBar(
        
        
//         title: Text("Check Button"),
//       ),
//       body: Center(
        
        
//         child: ReUseButtonWithTextAndArrow(
//           isIndigo: true,
//           label: "Hello",
//           onTap: (){
//             print("Tapped");
//           },
//         ),
//       ),
//     );
//   }
// }

// ~~~


// ### Use tilters
// `


// // Did you know you can use tildes instead of backticks for code in markdown? ���
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