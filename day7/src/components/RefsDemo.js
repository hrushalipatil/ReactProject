import React, { Component } from "react";

class RefsDemo extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <> 
                <input type="text" ref = {this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

export default RefsDemo 