import React from 'react';
import commonMethod from "./CommonMethod.tsx";


interface VedaOwnProps {
    nameComp: string;
    /*commonMethodProp: () => void;
    commonStateProp: {name: string};*/
}

class Veda extends React.Component <VedaOwnProps> {

    render () {
        // FROM PARENT PROPS - STATE  YING YANG
        const {nameComp,
            } = this.props;

        return (
            <div>
                <button >THIS IS VEDA BUTTON :{nameComp}</button>
                <label>THIS IS VEDA STATE : </label>
            </div>
        );
    }
};

export default commonMethod(Veda);