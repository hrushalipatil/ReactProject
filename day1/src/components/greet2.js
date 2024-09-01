import React from "react";
function Greet2(props){
    let {firstname,lastname}=props
    return(
        <div>
            <h1>
                hello Greet2 {firstname} {lastname}
            </h1>
        </div>
    )
}

export default Greet2