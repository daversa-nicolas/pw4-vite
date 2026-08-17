import React from 'react';
import commonMethod, {type CommonMethodInjectedByHoc} from "./CommonMethod.tsx";

interface VimanasOwnProps {
    nameComp: string;
}


type VimanasProps = VimanasOwnProps & CommonMethodInjectedByHoc;

class Vimanas extends React.Component <VimanasProps>{



    render() {

        // FROM PARENT PROPS - STATE YING YANG
        const {nameComp,commonMethodHoc}=this.props;

        return (
            <div>
             <button onClick={commonMethodHoc}>THIS IS Vimana BUTTON : {nameComp}</button>
             <label>THIS IS VIMANAS STATE :</label>
            </div>
        );
    }
}

export default commonMethod(Vimanas);