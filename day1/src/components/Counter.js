import React,{Component} from "react";
class Counter extends Component{

    constructor(){
        super()
       // Initializing the state with a counter property set to 0.
        this.state = {
            counter:0
        }
    } 

  // This function increments the counter in the state and logs the updated counter.

  increment(){
    // this.state = {
    //     counter:this.state.counter + 1
    // } 

    this.setState({
        counter:this.state.counter + 1  
    },()=>{
       console.log(this.state.counter) 
    })

    //console.log(this.state.counter)
}

render(){
    return(
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={()=> this.increment()}>Increase</button>
        </div>
    )
}


}

export default Counter