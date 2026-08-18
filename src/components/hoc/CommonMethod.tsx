import React, {type ComponentType} from "react";

// to injection in childrens from HOC - decorator Hoc pour distinguer injected in childred props
export interface CommonMethodInjectedByHoc{

    methodNameUsedHoc: () => string;
    currentClickedNameHoc: string;
    handleComponentClickHoc: () => void;
}


const commonMethod = <P extends object>
(WrappedComponent: ComponentType<P & CommonMethodInjectedByHoc>):
    ComponentType<P> => {
    class CommonMethod extends React.Component<P> {

        state = {
            nameComp: "CONSTRUCTON INITIAL",
            commitCliked: false,
            currentClickedName:"INITIAL NAME COMPOMENT"
        }

        // Cette méthode modifie l'état UNIQUEMENT lors de l'action utilisateur
        handleComponentClick = (componentNam: string): void => {
            console.log("THIS OUTPUT HOC METHOD HAND COMPONENT CLICK NAME WORKING: " + componentNam);

            // Mise à jour de l'état : React va automatiquement réafficher les enfants
            this.setState({
                commitCliked: true,
                currentClickedName: componentNam
            });

            console.log("THIS IS commit CLICKED BOOLEAN : " + this.state.commitCliked);

        };

    /*    commonsMethod=()=>{

            console.log("THIS IS COMMON METHOD WORKING :");

        }*/

        methodNameUsed=(nameCompDummy: string): string =>{

            console.log("THIS OUTPUT HOC METHOD NAME WORKING :" + nameCompDummy);

            return "YOU CLICKED ON BUTTON COMPONENT : " + nameCompDummy;
        }


        componentDidUpdate(_prevProps: Readonly<P>, prevState: Readonly<{ commitCliked: boolean }>) {

            const wrapperName= WrappedComponent.name;

            console.log("THIS IS componentDidUpdate WORKING:" + wrapperName )
            if (this.state.commitCliked !== prevState.commitCliked) {
                console.log("THIS IS componentDidUpdate WORKING:" + wrapperName )
            }
            console.log("THIS IS componentDidUpdate WORKING:" + wrapperName )
        }



        render() {

            // automatical name of component children
            const wrapperName = WrappedComponent.name || "Componente sin nombre";
            //destructuring applied to props and methods HOC
            // Injection des propriétés dynamiques from HOC to childrens

            const props = {
                // commonMethodHoc: this.commonsMethod,
                // Pasa una función que acepta el nombre del componente cuando sea llamada
                // WrappedComponent.name >> name proviene automáticamente de la definición
                // de la función o clase del componente que estás envolviendo.
                // PASSING VAL?UE OF STATE
                methodNameUsedHoc: () => wrapperName,
                currentClickedNameHoc: this.state.currentClickedName,
                handleComponentClickHoc:()=> this.handleComponentClick(wrapperName),
                ...this.props
            } as P & CommonMethodInjectedByHoc;



            return <WrappedComponent {...props}/>
        }
    }
    return CommonMethod
}
export default commonMethod;