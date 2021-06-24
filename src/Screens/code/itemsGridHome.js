import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../home-sections/footer';
import {Header, HeaderItems, HeaderItem, HeaderBlackContainer, BodyGrid, 
        FlexItemsBody,WidgetImage,WidgetName,WidgetDescription, WidgetCategory,
        AbouGrids,Padd, SearchIcon, SearchBox,SearchBoxContainer,SpaceForLoader,
         CategoryTag,FailedLoading,
        FailedWord ,Categories,ProfilePic, PiKContainer} from './StyleItemsGridHome'
import { Logos,Logo,Logo2,} from "../home-sections/homeScreenStyled.js";
import {getCodes, searchWidget} from '../requests/get_all_code_ui';
import Loader from '../../components/loading';
import { TermsOfUseGrey, TermsOfUseLink } from '../upload/UploadStyle';

function ItemsGridHome(){

    const [results,updateResults] = useState([null]);
    const [searchString,updateSearchString] = useState("");
    const [isLoading,changeLoadingStatus] = useState(false);
    const [framework,changeFramework] = useState("All");
    // const [searchResults,updateSearchResults] = useState([null]);

    // var allCategoriesList = ["All","Flutter","React","Alerts","Badges","Buttons",
    // "Cards","Carousel","Dropdown","Inputs","Forms","Lists","Media-objects","Modals",
    // "Navs","bars","Pagination","Popovers","Progress","Scroolspy","Spinners","Toasts","Tool-Tips"];

    var allCategoriesList = ["All","Alerts","Appbars","Badges","Buttons","Cards","Dropdowns","Forms","Lists","Loaders","Navbars","Polls_rating_stars",
     "Pagination",  "Switches"];

    var allCategories = allCategoriesList.map((item,indx)=>{

        return <Link style={{
            textDecoration:"none",
        }}> <CategoryTag key={indx} isActive={framework === item.toString()?true:false} onClick={(e)=>newFramework(item.toString())}> {item} </CategoryTag></Link>   

    })

    useEffect(() => {
        let mounted = true;

      var defaulFramwork = window.localStorage.getItem("widgetSource_framework") || "All";

      changeFramework(defaulFramwork)

        changeLoadingStatus(true)
        getCodes(defaulFramwork)
        .then((items)=>{
            // console.log(defaulFramwork);
            // console.log(items);
            // console.log("Items: ",items.toString()[0]);

            if(mounted){
                if(items.toString()[0] === "<"){
                    updateResults([]);

                } else{
                    updateResults(items);
                }               
            }
            changeLoadingStatus(false)
        });
        return () => mounted = false;
      },[framework]);
    

      function setInput(e){
          e.preventDefault();
          updateSearchString(e.target.value)          
      }

    function newFramework(newValue){
        changeFramework(currentFramework => {
            currentFramework = newValue
            window.localStorage.setItem("widgetSource_framework",`${currentFramework}`);
            return currentFramework;
        })
    }

    function search(){
        
        if(searchString.length !== 0 && searchString !== "" ){
            
            changeLoadingStatus(true)
            updateResults([null]);

            searchWidget(searchString,framework)
            .then((items)=>{
                if(items.toString()[0] === "<"){
                    updateResults([]);
                    changeLoadingStatus(false)           

                }else{
                    updateResults(items);
                    changeLoadingStatus(false)           
                     }

            });
        }

    }

    var namesComponent =  results !== [] && results !== null ? results.map((res,index)=>{


        return res !== [] && res !== null ?  <Link to={{pathname:`/widgets/${results[index]["widgetname"]}/${results[index]["id"]}`,
        state:{
            picture:results[index]["widgetimage"],
            widgetname:results[index]["widgetname"],
            postername:results[index]["postername"],
            description:results[index]["description"],
            by:results[index]["postername"],
            code:results[index]["code"],
            }
        }} key={index} style={{textDecoration:"none"}}>
        {/* <GridItemsBody> */}
        <FlexItemsBody>
        <WidgetImage networkImage={results[index]["widgetimage"]}/>
        <WidgetName>{results[index]["widgetname"]}</WidgetName>
        <WidgetDescription><span> {results[index]["description"]}</span></WidgetDescription>
        <WidgetCategory> {results[index]["postername"]}</WidgetCategory>
        </FlexItemsBody>
        {/* </GridItemsBody> */}
        </Link>
        : <div key={index}/>
        ;
    }): <div/>

    return (
        <div>
            <ItemsHeader/>
            <div style={{height:"20px"}}></div>

            <PiKContainer>
              <Link to="/profile-auth">
                <ProfilePic/>
              </Link>               
            </PiKContainer>

            <Categories>
                {allCategories}
            </Categories>

            <div style={{height:"10px"}}></div>
            <SearchBoxContainer>
            <SearchBox placeholder="Search widget" onChange={(e)=>{setInput(e)}}></SearchBox>

            <SearchIcon onClick={()=>{search()}}></SearchIcon>

            </SearchBoxContainer>
                
            {/* Body of the Grids */}
            <AbouGrids>Select from our amazing widgets</AbouGrids>

            {isLoading !== false && <SpaceForLoader>
                <Loader/>
            </SpaceForLoader>
            }
            
            <BodyGrid>
              { (results !== null && results !== []) && namesComponent  }

             {results.length === 0 && <FailedLoading>No results  <FailedWord> {searchString}  </FailedWord> </FailedLoading> }
            </BodyGrid>

            <Padd/>
            <TermsOfUseGrey>By using this website, you have agreed to  <Link style={{textDecoration:"none"}} to="/terms-of-use"> <TermsOfUseLink>Our Terms Of Use</TermsOfUseLink> </Link> </TermsOfUseGrey>
            

            <Footer/>
        </div>
    );
}


export const ItemsHeader = function ItemsHeader() {
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
            {/* <Link to="/category" style={{textDecoration:"none"}}>
            <HeaderItem>Category</HeaderItem>
            </Link> */}
            <Link to="/upload" style={{textDecoration:"none"}}>
            <HeaderItem>Upload</HeaderItem>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
            <HeaderItem lastItem={true}>Home</HeaderItem>
            </Link>
            </div>
        </HeaderItems>
    </Header>
    )
}


// function showNewString(string){
//     if(string.length === 99){
//         return string;
//     }else if(string.length > 99){
//         return `${string.substring(0,98)}...`;
//     }else if(string.length < 99){

//         var i;
//         var len = string.length;
//         // var lenRemainig = 99 - len;
//         var newString = "";

//         for(i=0;i<= len-1;i++){
//             newString += string[i];
//             if(i>=len-1){
//                 for(i=len;i<=98;i++){
//                     newString +=" "
//                 }
//             }
//         }
//         console.log(newString.length);
//         return newString;
//     }
// }

export default ItemsGridHome