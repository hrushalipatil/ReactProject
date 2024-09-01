import React from "react";

const heading = {
    fontSize : "60px",
    color:"yellow",
    border:"10px solid SKYBLUE"
    
}



function Inline(){
    return(
        <div>
            <h1 style={heading}>ANOTHER INLINE COMPONENTS</h1>
            <h1 className="four">ANOTHER INLINE COMPONENTS</h1>
        </div>
    )
}

export default Inline