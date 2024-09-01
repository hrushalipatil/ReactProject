import React,{Component} from "react";


class EventBind extends Component{
    
    constructor(){
        super()
        this.state ={
            message:"HELLO"
        }
        
    
    // clickHandler(){
    //     this.setState({
    //         message:"GOOD BYEEEEE"
    //     })
    //     // console.log(this)
    }

    clickHandler =()=>{
        this.setState({message:"GOODBYE"})
    }
render(){
    return(
        <div>
            <p>{this.state.message}</p>
            <button onClick={this.clickHandler}>CLICK</button>
        </div>
    )
}
}
export default EventBind