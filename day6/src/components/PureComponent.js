import React ,{PureComponent} from "react";

class PureC extends PureComponent{
    render(){
        console.log("PURE COMPONENT RENDER >>>>>")

        return(
            <div>
                Pure COMPONENT{this.props.name}
            </div>
        )
    }

}

export default PureC;