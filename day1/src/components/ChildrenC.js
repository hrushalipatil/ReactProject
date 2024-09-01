import React from "react";



let ChildrenC = (props) => {
    console.log(props)

    return (
        <div>
            <button onClick={() => props.greetHandler("ALERT FOUND >>")}>greetButton</button>
        </div>


    )

}

export default ChildrenC