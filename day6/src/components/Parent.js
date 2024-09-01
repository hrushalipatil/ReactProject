import React, { Component } from "react";
import RegulerComponent from "./RegulerComponent";
import PureC from "./PureComponent";

class Parent extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:"Vrushali"
        }

    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"snehal"
            })
        },2000)
    }
    render(){
        console.log("Parent Component render >>>>>>>")
        return(
            <div>
                <RegulerComponent name = {this.state.name}></RegulerComponent>
                <PureC name= {this.state.name}></PureC>
            </div>
        )
    }
}
export default Parent