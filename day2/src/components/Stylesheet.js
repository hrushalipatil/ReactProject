// CSS style


import React from "react";
import "./Style.css"

function Stylesheet(props){
    let className = props.name == "one"?"one":"two"
    
    
    return(
        <div>
            <h1 className ={`${className} three`}>style</h1>
        </div>
    )
}
export default Stylesheet

