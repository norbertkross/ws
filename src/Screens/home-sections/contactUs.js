import React from "react"
import "./contactUs.css"
import styled, { css } from "styled-components"
import { sendAdminEmail } from "../requests/sendAdminMail"
import Loading from "../../components/loading"


class ContactUs extends React.Component{

     constructor(props){
        super(props)

        this.state = {
            name:"",
            email:"",
            message:"",
            isLoading:false
        }

     }   

     // Update code input
     onNameInputChange = (e) => {
        e.preventDefault()

        this.setState({name:e.target.value},(__)=>{
            //console.log(this.state.name);
        })    }    


     // Update description input
    onEmailInputChange = (e) =>{
        e.preventDefault()

        this.setState({email:e.target.value},(__)=>{
            //console.log(this.state.email);
        })
    }    


     // Update item name input
     onMessageInputChange =(e) =>{
        e.preventDefault()

        this.setState({message:e.target.value},(__)=>{
           // console.log(this.state.message);
        })    
    } 
        
        

     sendTheMail = () =>{

        if(this.state.name.trim() !== "" && this.state.email.trim() !== "" && this.state.message.trim() !== ""){

            this.setState({isLoading:true})
            sendAdminEmail(this.state.name,this.state.email,this.state.message).then((__)=>{
                
                this.setState({isLoading:false})
                
                if(__.toString()[0] === "<"){
                    //console.log(__);
                    alert("try again")

                } else{
                    //console.log(__);
                    alert(__[0]['msg'])
                    // updateResults(items);
                }                

            })
         }else{
            alert("No field should be empty")
         }
     }   

    render(){
    return (
        <ContactBody shouldAnimate={this.props.shouldAnimate}>
        <div ref={this.props.theRef} className="contactUs">
            
            <div >                
                <div className="get-in-touch">Get in touch with us </div>
                <div className="sub-in-touch">We would love to hear from you. Your feedback helps us grow </div>
            </div>

            <div className="email_name">
                <input onChange={(e)=>{this.onNameInputChange(e)}} type="text" className="my-input" placeholder="Name"/>
                <input onChange={(e)=>{this.onEmailInputChange(e)}} type="text" className="my-input" placeholder="Email"/>
            </div>

            <div className="message">
                <textarea onChange={(e)=>{this.onMessageInputChange(e)}} className="message-input" placeholder="Message"/>
            </div>

            { this.state.isLoading === true && <Loading/>}

            <div style={{height:"5px"}}/>
            <div className="send">
                <div className="send-button" onClick={this.sendTheMail}> Send </div>
            </div>
            <div className="paddown"></div>
        </div>
        </ContactBody>
    );
    }
}


export const ContactBody = styled.div`

    ${ props => props.shouldAnimate === true && css`
    animation-name: animateContact;
    animation-duration: 2000ms;
    position: relative;
    @keyframes animateContact{
    0%{
     right: -200px;   
    }
    100%{
     right: 0px; 
    }
}`
}
    `;

export default ContactUs