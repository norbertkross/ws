
import React from 'react'

export default class DOMnodeReference extends React.Component {
    constructor(props){
        super(props);
        this.widgetRef = React.createRef()
    }

    handleClick = ()=>{
        this.widgetRef.current.style.backgroundColor = "blue"
        console.log("Color");
        console.log(this.widgetRef.current);
    }
    render() {
        return (
            // <RefWidget widgetRef={this.widgetRef} handleClick={this.handleClick}></RefWidget>
            <FunctComp widgetRef={this.widgetRef} handleClick={this.handleClick}></FunctComp>
        )
    }
}



class RefWidget extends React.Component {
    constructor(props){
        super(props)
    }
    state = {  }
    render() { 
        return ( 
            <div>
            <input type="text" ref={this.props.widgetRef}>
            </input>
            <div  style={{
                height:"300px",
                width:"90%",
                backgroundColor:"grey",
            }} onClick={this.props.handleClick}></div>                       
        </div>
        );
    }
}
 



 function FunctComp(props) {
    return (
        <div>
        <input type="text" ref={props.widgetRef}>
        </input>
        <div  style={{
            height:"300px",
            width:"90%",
            backgroundColor:"grey",
        }} onClick={props.handleClick}></div>                       
    </div>
    )
}


