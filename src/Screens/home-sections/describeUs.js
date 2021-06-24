import React from "react"
import "./describeUs.css"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom";


class DescribeUs extends React.Component{
    render(){
    return(
        <DescriptionBody shouldAnimate={this.props.shouldAnimate}>
        <div ref={this.props.theRef} className="describeMain">
            <div className="describeGrid">
                <div className="describe-item-image"></div>
                <div className="describe-item-text">
                    <div className="about">About</div>
                    
                    <div className="large-text">We have made it our task to help you become more productive as a developer</div>
                    
                    <div className="medium-text">
                    First of, software developmet can be fraustrating. We understand 
                    the odeal sometime you may have to go through to do some simple task. 
                    That's why we created this platform to give you access 
                    to the widgets you need whenever you want them.
                    </div>
                    <Link to="/user-auth">
                    <div className="button"> Login / Register </div>
                    </Link>
                </div>
            </div>
        </div>
        </DescriptionBody>
    );
  }
}



    /* ${props=>console.log("should Animate in DESCRIPTION",props.shouldAnimate)} */
export const DescriptionBody = styled.div`

    ${ props => props.shouldAnimate === true && css`
    animation-name: animateDescription;
    animation-duration: 2000ms;
    position: relative;
    @keyframes animateDescription{
    0%{
     right: -150px;   
    }
    100%{
     right: 0px; 
    }
}`
}
    `;

export default DescribeUs