import React from 'react'
import { LoaderBody, LoaderItem } from './loadingStyle'

export default class Loading extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                value:0,
                //to check if the animation is currently playing forward or backward
                forward:true,
            };
        }


     timer = () => {

            setInterval(()=>{

                if(this.state.value<=2 && this.state.forward === true){
                   //increase the value and play forward
                   this.setState({value:this.state.value+1})

                   }else{

                   // reduce counter so that the value descreases
                   if(this.state.value === 0){
                   
                    this.setState({value:this.state.value+1,forward:true})
                   }else{

                   // reduce counter so that the value descreases
                    this.setState({value:this.state.value-1,forward:false})
                   }                                     
                }
    
            },1000);
        }

    componentDidMount(){
        this.timer()
    }

    render() {
        return (
        <LoaderBody>
            <LoaderItem isActive={this.state.value===0?true:false}/>
            <LoaderItem isActive={this.state.value===1?true:false}/>
            <LoaderItem isActive={this.state.value===2?true:false}/>
            <LoaderItem isActive={this.state.value===3?true:false}/>
        </LoaderBody>
        )
    }
}

