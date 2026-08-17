import React, {type ComponentType} from "react";


export interface CommonMethodInjectedByHoc{
    commonMethodHoc:() => void;
}

const commonMethod = <P extends object>
(WrappedComponent: ComponentType<P & CommonMethodInjectedByHoc>):
    ComponentType<P> => {
    class CommonMethod extends React.Component<P> {

        state = {
            nameComp: "THIS IS INITIAL COMMON STATE",
        }

        // after render and before setState
        componentDidMount(){
            console.log("THIS IS COMMON METHOD WORKING in state initial:" +
            this.state.nameComp)
        }

        commonsMethod=()=>{

            console.log("THIS IS COMMON METHOD WORKING :");

            /*this.setState(
                {
                    commonStateProp: {
                        name: "COMMON METHOD MODIFIED VALUE"

                    }
                }
            )*/

        }

        outputName=()=>{
            console.log(this.state);
        }
        render() {
            return <WrappedComponent commonMethodHoc={this.commonsMethod}
                                     {...this.props}/>
        }
    }
    return CommonMethod
}
export default commonMethod;