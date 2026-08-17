import React, {type ComponentType} from "react";


export interface CommonMethodInjectedByHoc{
    commonMethodHoc:() => void;
    methodNameUsedHoc: () => string;
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
            console.log("THIS IS COMMON METHOD WORKING DIDMOUNT in state initial:" +
            this.state.nameComp)
        }

        commonsMethod=()=>{

            console.log("THIS IS COMMON METHOD WORKING :");

        }

        methodNameUsed=(nameCompDummy: string): string =>{
            console.log("THIS OUTPUT HOC METHOD NAME WORKING :" + nameCompDummy);
            return "YOU CLICKED ON BUTTON COMPONENT : " + nameCompDummy;
        }

        render() {

            //destructuring applied to props and methods HOC
            const props = {commonMethodHoc: this.commonsMethod,
                // Pasa una función que acepta el nombre del componente cuando sea llamada
                // WrappedComponent.name >> name proviene automáticamente de la definición
                // de la función o clase del componente que estás envolviendo.
                methodNameUsedHoc:()=> this.methodNameUsed(WrappedComponent.name),
                ...this.props} as P & CommonMethodInjectedByHoc;


            return <WrappedComponent {...props}/>
        }
    }
    return CommonMethod
}
export default commonMethod;