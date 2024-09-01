import React,{Component} from "react";



class Counter2 extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState((previouseState)=>({
            count: previouseState.count+1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

   render(){
        return (
            <div>
                <h3>
                    {this.state.count}
                </h3>
                <button onClick={()=>this.incrementFive()}>incrementCounter</button>
                
            </div>
        )
    }
} 

export default Counter2



// import React , {Component}from "react";

// class Counter2 extends Component {

//     constructor(){
//         super()
//         this.state = {
//             count:0
//         }
//     }

//     increment(){

//         this.setState((pre)=>({
//             count:pre.count + 1
//         }))
       
//         // this.state.count = this.state.count + 1
//         // console.log(this.state.count)
//         // this.setState({
//         //     count:this.state.count + 1
//         // },()=>{
//         //     console.log(this.state.count)
//         // })

//         //console.log(this.state.count)  



//     }

//     incrementFive(){
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }


//     render(){
//         return(
//             <div>
//                <h1>{this.state.count}</h1>
//                <button onClick={()=> this.incrementFive()}>incrementCount</button> 
//             </div>
//         )
//     }

// }

// export default Counter2  