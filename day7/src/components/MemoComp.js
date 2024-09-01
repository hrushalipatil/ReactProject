import React from "react";

function MemoComp({name}){
    console.log("Rendering thr Memo compoenent")
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)