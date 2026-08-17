import React from 'react'
import commonMethod from "./CommonMethod.tsx"
import type {CommonMethodInjectedByHoc} from "./CommonMethod.tsx"

interface VedaOwnProps {
    nameComp: string;
    /*commonMethodProp: () => void;
    commonStateProp: {name: string};*/
}

type VedaProps = VedaOwnProps & CommonMethodInjectedByHoc;
/*

interface VedaProps extends VedaOwnProps, CommonMethodInjectedByHoc{
    //ALREADY DECLARED IN HOC COMPONENT
    //CommonMethodHoc: () => void;
}
*/


class Veda extends React.Component <VedaProps> {

    render () {
        // FROM PARENT PROPS - STATE  YING YANG
        const {nameComp, methodNameUsedHoc
            } = this.props;

        return (
            <div>
                <button onClick={()=>
                    {
                        methodNameUsedHoc()
                    }
                }>THIS IS VEDA BUTTON :{nameComp}</button>


            </div>
        );
    }
}

export default commonMethod(Veda);