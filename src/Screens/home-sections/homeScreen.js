import React from "react"
import { Link } from "react-router-dom";
import Introduction from "./introduction";
import ShowCaseSamples from "./ShowCaseSamples";
import DescribeUs from "./describeUs";
import QuotedTexts from "./quotedTexts";
import ContactUs from "./contactUs";
import Footer from "./footer";
import { Item, Items, ItemGreen, Logos,Logo,Logo2, ForeMessage, GetStartedDiv, GetStarted, BaseGrid, BottomGrid, TransparentBlack, Heading,DropDownLinkItemIndigo,DropDownLinkItem,DropMain, MenuIconOpenClose, DropDownContent,DropDownContentPadding } from "./homeScreenStyled";
import isComponentVisible from "../viewport/IsComponentVisible";

    //#7120F6

var linkStyle =  {
    textDecoration:"none"
}

class Home extends React.Component {


 constructor(props){
     super(props)
    this.state = {
        isOpened:false,
        matches: false,
        shouldAnimateShowCase:true,
        shouldAnimateIntroduction:false,
        shouldAnimateDescribe:true,
        shouldAnimateContact:true,
        // showCaseWidgetRef:React.createRef(),
     }  
     this.showCaseWidgetRef = React.createRef()
     this.introWidgetRef = React.createRef()
     this.describeWidgetRef = React.createRef()
     this.contactWidgetRef = React.createRef()
   

 }     
   

    openCloseDropDown = ()=>{
        this.setState({
            isOpened: ! this.state.isOpened
        },(state)=>{}
        )
    }    

     goToContacts = ()=>{
        this.openCloseDropDown() 
        window.scrollTo({
            behavior:"smooth"  ,
            top:this.contactWidgetRef.current.offsetTop,
          })
     }

     goToAbout = ()=>{
        this.openCloseDropDown()
         console.log("before moving");
         window.scrollTo({
               behavior:"smooth"  ,
               top:this.describeWidgetRef.current.offsetTop,
             })
         console.log("after moving");

     }

    animateShowCase = (componentType)=>{
        if(componentType === "showCase"){
            this.setState({
                shouldAnimateShowCase: ! this.state.shouldAnimateShowCase
            },(state)=>{}
            )
        }else if(componentType === "introduction"){
            this.setState({
                shouldAnimateIntroduction: ! this.state.shouldAnimateIntroduction
            },(state)=>{}
            )
        }else if(componentType === "describe"){
            this.setState({
                shouldAnimateDescribe: ! this.state.shouldAnimateDescribe
            },(state)=>{}
            )
        }else if(componentType === "contact"){
            this.setState({
                shouldAnimateContact: ! this.state.shouldAnimateContact
            },(state)=>{}
            )
        }


        // console.log("The new state", this.state.shouldAnimate);
    } 
    

    //attach our function to document event listener on scrolling whole doc
    componentDidMount() {
        document.addEventListener("scroll", this.logrefs());
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
        document.removeEventListener("scroll", this.logrefs());
    }

    logrefs = ()=>{
        
        // ShowCase Animator
        isComponentVisible((entries, observer)=>{
          this.animateShowCase("showCase")        
        },this.showCaseWidgetRef.current);

        // Introduction Animator
        isComponentVisible((entries, observer)=>{
          this.animateShowCase("introduction")        
        },this.introWidgetRef.current);

        // Describe Animator
        isComponentVisible((entries, observer)=>{
          this.animateShowCase("describe")        
        },this.describeWidgetRef.current);

        // Contact Animator
        isComponentVisible((entries, observer)=>{
          this.animateShowCase("contact")        
        },this.contactWidgetRef.current);


    }

    render() {  
        return (
            <div className="home-root">
                <BaseGrid>
                <BottomGrid>
                <TransparentBlack>
                    
                <div className="container-side"></div>
                <div className="top-container">
                <AppNavBar 
                 openClose={this.state.isOpened}
                 switchIcon={this.openCloseDropDown}
                 toContact={this.goToContacts}
                 toAbout={this.goToAbout}
                 />
                <Heading>
                    <div >
                    <Logos>
                    <Logo></Logo>
                    <Logo2>WidgetSource</Logo2>
                    </Logos>
                    </div>    
                   
                   <Items>

                        <Link style={linkStyle} to="/">
                        <Item>Home</Item>
                        </Link>

                        <Link to="/" style={linkStyle} onClick={this.goToAbout}>
                            <Item>About</Item> 
                        </Link>

                        <Link style={linkStyle} to="/" onClick={this.goToContacts}>
                            <Item>Contact</Item>                            
                        </Link>

                        <Link style={linkStyle} to="/upload">
                            <ItemGreen> Upload</ItemGreen>
                        </Link>

                        {/* <Link>
                        <ProfilePic/>
                        </Link> */}
                            
                    </Items>
                </Heading>
                <ForeMessage>
                    Get quality and highly responsive widgets for your Flutter project whenever wherever.
                </ForeMessage>


                <GetStartedDiv>

                    <GetStarted>
                        <Link to="/widgets" style={{
                            display:"flex",
                            textDecoration:"none",
                            fontSize: "18px",
                            color:"white",
                            fontWeight:500,
                            padding:"15px 40px",
                            }}> Get Started </Link>
                    </GetStarted>                       

                </GetStartedDiv>    
                    
                </div> 
                  </TransparentBlack>

                </BottomGrid>  
                </BaseGrid>

                <div style={{height:"50px",}}/>
                <Introduction theRef={this.introWidgetRef} shouldAnimate ={this.state.shouldAnimateIntroduction}/>
                <DescribeUs theRef={this.describeWidgetRef} shouldAnimate ={this.state.shouldAnimateDescribe}/>                
                <ShowCaseSamples  theRef={this.showCaseWidgetRef} shouldAnimate ={this.state.shouldAnimateShowCase}/>
                <QuotedTexts/>
                <ContactUs theRef={this.contactWidgetRef} shouldAnimate ={this.shouldAnimateContact}/>

                <Footer toAbout={this.goToAbout}/>


            </div>
        )
    }
}

function AppNavBar(props){

    return (
        <DropMain>
            <DropDownContent openClose = {props.openClose}>
            <MenuIconOpenClose openClose={props.openClose} onClick={props.switchIcon}></MenuIconOpenClose>
                <DropDownContentPadding openClose = {props.openClose}>
               <Link  to="/"style={linkStyle}>                            
                <DropDownLinkItem> Home </DropDownLinkItem>
                </Link>
                <Link to="/" style={linkStyle} onClick={props.toAbout}>
                    <DropDownLinkItem> About </DropDownLinkItem>
                </Link>
                <Link to="/" style={linkStyle} onClick={props.toContact}>
                    <DropDownLinkItem> Contact </DropDownLinkItem>
                </Link>

                <Link to="/upload" style={linkStyle}>
                <DropDownLinkItemIndigo>
                    Upload
                </DropDownLinkItemIndigo>
                </Link>
                </DropDownContentPadding>
             </DropDownContent>
        </DropMain>
    );
}


export default Home;

