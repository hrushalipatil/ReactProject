import React, {Component} from "react";
import ChildrenR from "./ChildrenR";

class ParentR extends Component {

    constructor() {
        super()

        this.state = {
            ParentRMessage: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(X){
        alert(`${this.state.ParentRMessage}${X}`)
    }

    render(){
        return(
            <div>
            <ChildrenR greetHandler={this.greetParent}></ChildrenR>
            </div>
        )
        
    }
    
}
     
export default ParentR