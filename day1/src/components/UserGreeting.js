import React, { Component } from "react";

// if-else approch
// class UserGreeting extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn : true
//         }
//     }

//     render(){
//         if(this.state.isLoggedIn){
//             return <div>LoggIn website <h1>WELCOME</h1></div>
//         }
//         else{
//             return <div>invalid log</div>
//         }
//     }
// }

// =====================================================

// Element-Variable approch

// class UserGreeting extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn : false
//         }
//     }
//     render(){
//         let Message = undefined
//         if(this.state.isLoggedIn){
//             Message =<div>LoggIn<h1>WELCOME</h1></div>
//         }
//         else{
//             Message =<div><h1>Invalid User Please check it again !!</h1> </div>
//         }
//         return <div>{Message}</div>
//     }
// }

// =======================================================

// //tenary - operator - approach 

// class UserGreeting extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn : false
//         }
//     }
//     render(){
//          return this.state.isLoggedIn?<div>LoggIn<h1>WELCOME</h1></div>:<div><h1>Invalid User Please check it again !!</h1></div>
//     }
// }




// // short-circuit 


class UserGreeting extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
         return this.state.isLoggedIn && <div>LoggIn<h1>WELCOME</h1></div>
        }

    
}
 
export default UserGreeting