import React from 'react';
import commonMethod, {type CommonMethodInjectedByHoc} from "./CommonMethod.tsx";

interface VimanasOwnProps {
    nameComp: string;
}


type VimanasProps = VimanasOwnProps & CommonMethodInjectedByHoc;

class Vimanas extends React.Component <VimanasProps>{



    render() {

        //DESCRUCTURING of PROPS  FROM PARENT PROPS - STATE YING YANG
        //  AND injected from HOC
        const {nameComp,
            handleComponentClick,
             currentClickedName}=this.props;

        return (
            <div>
             <button onClick={()=>{
                                      handleComponentClick()}

             }>
                 THIS IS Vimana BUTTON : {nameComp}</button>
                <label>THIS IS THE OUTPUT FROM PARENT PROPS : {currentClickedName}</label>

            </div>
        );
    }
}

export default commonMethod(Vimanas);