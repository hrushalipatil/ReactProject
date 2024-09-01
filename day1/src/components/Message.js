// import React,{Component} from "react";

// class Message extends Component{
//     constructor(){
//         // Initializing the state with a message property set to "Welcome."
//         super()
        
//         this.state ={
//             message:"Welcome "
//         }
//     }

//  // This function changes the message in the state to "Welcome VRUSHALI !"
// changeMessage(){
//     this.setState({
//         message:"Welcome VRUSHALI !"
//     })
// }

// render(){
//     return(
//         <div>
//              {/* Displaying the current message */}
//             <h2>{this.state.message}</h2>
//               {/* Button to trigger the message change when clicked */}
//             <button onClick={()=>this.changeMessage()}>changeMessage</button>
//         </div>
//     )
// }

// }

// export default Message


import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome"
        }
    }
    changeMessage() {
        this.setState=({
            message:"Wellcome Shreya"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>changeMessage</button>
            </div>
        )
    }

}
export default Message