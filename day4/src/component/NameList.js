import React from "react";




// 1.
function NameList(){
    const names=['vrushali','aboli','apeksha','mrunali']
    let A = names.map((el)=><h1>{el}</h1>)
    return <div>
        {A}
    </div>
}



// 2.

// function NameList(){
//     const names=['vrushali','aboli','apeksha','mrunali']
//     const B = names.map((el,index)=><h2 key ={index}>{el}</h2>) 
//     return <div>{B}</div> 
// }


export default NameList;