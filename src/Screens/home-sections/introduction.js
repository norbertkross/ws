import React from "react"
import Media from "react-media"
import Picture from "../../assets/List 2_96px.png"
import Faster from "../../assets/Lightning Bolt_100px.png"
import Time from "../../assets/Realtime Protection_96px.png"
import "./introduction.css"
import styled, { css } from "styled-components"

class Introduction extends React.Component{

    render(){
    return(

        <IntroductionBody shouldAnimate={this.props.shouldAnimate}>
           <div ref={this.props.theRef} >
          <Media query="(max-width:760px)">
             {matches => {
            return matches? 
            <div style={_css.introTextMobile}>
            <div style={_css.introTextDecoMobile}>With years of experience in working with these, we can deliver the best product to your satisfaction. </div>
            </div>        
                : 
               <div style={_css.introText}>
                 <div style={_css.introTextDeco}> With years of experience in working with these, we can deliver the best product to your satisfaction.</div>
               </div>
               
             }} 

          </Media>

            <div className="holdCards">
                <RoundCard picture={Picture} getWidgets=" widgets & components" description="Here you'll find an amazing collection of widgets and themes you can use in your project"/>
                <RoundCard picture={Faster}  getWidgets="Work Faster" description="Why spend spend so much time doing the simple things over again and again, work faster"/>
                <RoundCard picture={Time}  getWidgets="Save Time" description="Save your precious time for the part of your work which would demand more time"/>
            </div>
            </div>
            </IntroductionBody>
    
    );
  }

}




function RoundCard(props){
    return(
        <div className="card">
            <div className="cardImage" style={imageProvider(props.picture)}> </div>
            <div className="titleLabel"> {props.getWidgets} </div>
            <div className="descriptionLabel" > {props.description} </div>
        </div>
    );
}


var _css = {
    introText:{
      padding: "50px 100px",
      // backgroundColor:"blue",
      margin:"auto",
      width:"50%",
    },
    introTextMobile:{
      padding: "50px 20px",
      // backgroundColor:"blue",
      margin:"auto",
      // width:"90%"
    },
    
    introTextDeco:{
     color: "rgb(134, 133, 133)",
     fontSize:"50px",
     padding:"20px 10px",
    },
    introTextDecoMobile:{
    // backgroundColor:"green",
     color: "rgb(134,133,133)",
     fontSize:"30px",
     padding:"20px 5px",
     margin:"auto",
    },   

} 


var imageProvider = (img)=>{

    return {
        margin:"20px",
        height:"90px",
        width: "90px",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${img})`,            
    }
}


// ${props=>console.log("should Animate in INTRO",props.shouldAnimate)}
export const IntroductionBody = styled.div`
    ${ props => props.shouldAnimate === true && css`
    animation-name: animateIntro;
    animation-duration: 2000ms;
    animation-delay:400ms;
    position: relative;
    @keyframes animateIntro{
    0%{
     left: -100px;   
    }
    100%{
     left: 0px; 
    }
}`
}
    `;


export default Introduction