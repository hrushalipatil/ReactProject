import React ,{Component} from "react";
import ChildrenRevision from "/.ChildrenRevision" ;


class ParentRevision extends Component{

    constructor(){
        super()
        this.state = {
            ParentName : "Parent"

        }
        this.GreetParent=this.GreetParent.bind(this)
    }
    GreetParent(name){
        alert(`${this.state.ParentName}${name}`)
    }
    render(){
        return(
            <div>
                
                <ChildrenRevision  GreetBUTTON ={this.GreetParent}></ChildrenRevision>
            </div>
        )
    }

}
export default ParentRevision