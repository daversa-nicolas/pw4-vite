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
        const {nameComp,
            handleComponentClickHoc,
            currentClickedNameHoc}
            = this.props;

        return (
            <div>
                <button onClick={()=>
                    {
                        handleComponentClickHoc();
                    }
                }>THIS IS VEDA BUTTON :{nameComp}</button>
                <label>THIS IS THE OUTPUT FROM PARENT PROPS : {currentClickedNameHoc}</label>


            </div>
        );
    }
}

export default commonMethod(Veda);