import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentC extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:"Vrushali"
        }

    }
  
   
    render(){
        
        return(
            <div>
                <MemoComp name = {this.state.name}/>
            </div>
        )
    }
 }
export default ParentC