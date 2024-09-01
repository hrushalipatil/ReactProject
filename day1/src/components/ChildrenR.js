import React from "react";

let ChildrenR =function(props){
    return(
        <button onClick={()=>props.greetHandler("< ALERT MODE ON >")}>GreetButton</button>
    )
}

export default ChildrenR