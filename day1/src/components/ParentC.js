import React,{Component} from "react";

import  ChildrenC from "./ChildrenC"

class ParentC extends Component{
    constructor(){
        super()
        this.state ={
            parentName : "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
        
    }

    greetParent(){
        alert(`this is ${this.state.parentName}`)
    }

    render(){
        return(
            <div>
                <ChildrenC greetHandler={this.greetParent}></ChildrenC>
            </div>
        )
    }
}

export default ParentC                                   