import React, { Component } from "react";

// class Counter extends Component {

//   constructor() {
//     super()
//     // Initializing the state with a counter property set to 0.
//     this.state = {
//       counter: 0
//     }
//   }

//   increment = () => {
//     this.state = {
//       counter: this.state.counter + 1
//     }
//     console.log(this.state.counter)
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.increment}>Increase</button>
//       </div>
//     )
//   }


// }

//=====================


class Counter extends Component{
  constructor(){
    super()
    this.state={
      counter:0
    }

  }
  // ------------------------------
  // // part1
  // increment(){
  //   this.setState({
  //     counter:this.state.counter+1
  //   })
  //   // console.log(this.state.counter)
  // }
  // -------------------------------------
  
  // // part2
  // increment=()=>{
  //   this.setState({
  //     counter:this.state.counter+1
  //   })
  //   // console.log(this.state.counter)
  // }

  // // part 3
  increment = ()=>{
    this.setState((prevState) =>({
        count:prevState.count + 1
    }));

} 
   increment = ()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
        })
        //this.state.count = this.state.count + 1
       
    }
  // -------------------------------------
  decrement(){
    this.setState({
      counter:this.state.counter-1
    })
    // console.log(this.state.counter)
  }
render(){
  return(
    <div>
      
      <h3>{this.state.counter}</h3>
      {/* part1 */}
      {/* <button onClick={()=> this.increment()}>+</button> */}
      {/* part2 */}
      {/* <button onClick={this.increment}>+</button> */}
      {/* part3 */}
      <button onClick={this.increment}>+</button>
      <button onClick={()=> this.decrement()}>-</button>
    </div>
  )
    
  
}
 

}

export default Counter
