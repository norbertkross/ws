import React,{Component} from "react"
import "./ShowCaseSamples.css"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom";


class ShowCaseSamples extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <ShowCaseBody shouldAnimate={this.props.shouldAnimate}>
            <div ref={this.props.theRef} >
            <div className="some-works">
               Some Of Our Works
            </div>
            <div className="some-works-sub">
               Going through our widgets you'll find a rich set of unique and amazing works.
            </div>
            <div className="gallery">
                <div className="col-1-item">
                    <TopContainer itemPath={`/widgets/Micheal%20Jackson%20WIdget%20/5`}/>
                </div>
                <div className="col-1-item">
                    <TopContainer itemPath={`/widgets/Micheal%20Jackson%20WIdget%20/5`} />
                </div>
            </div>

            <div className="gallery-2">
                <div className="col-2-item"> 
                    <TopContainer itemPath={`/widgets/Micheal%20Jackson%20WIdget%20/5`} />                
                </div>
                <div className="col-2-item"> 
                    <TopContainer itemPath={`/widgets/Micheal%20Jackson%20WIdget%20/5`} />
                </div>
                <div className="col-2-item"> 
                    <TopContainer itemPath={`/widgets/Micheal%20Jackson%20WIdget%20/5`} />
                </div>
            </div>

            <br/>

        </div> 
        </ShowCaseBody>           
        )
    }
    // return(

    // );
}


function TopContainer(props){

    return(
        <div className="topContainer">
            
            <div className="container-title">App Design</div>
            <div className="container-label">ColorLib Mobile</div>
            
            <Link to={props.itemPath} style={{textDecoration:"none"}}>
            <div className="top-container-button"> View </div>
            </Link>

        </div>

    );
}

/* ${props=>console.log("should Animate in showcase",props.shouldAnimate)} */
export const ShowCaseBody = styled.div`

    ${ props => props.shouldAnimate === true && css`
    animation-name: animateShowCase;
    animation-duration: 2000ms;
    position: relative;
    @keyframes animateShowCase{
    0%{
     left: -200px;   
    }
    100%{
     left: 0px; 
    }
}`
}
    `;

export default ShowCaseSamples

