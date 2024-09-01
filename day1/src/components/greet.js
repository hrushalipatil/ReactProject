import React from "react";
// Components can receive data through props and use it to render dynamic content. In your example:
const Greet=(props)=>{

    return <h3>helloo hi im greet function and my name is {props.firstname} {props.lastname}</h3>
}

export default Greet 