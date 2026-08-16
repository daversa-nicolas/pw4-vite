import React from 'react';
import commonMethod from "./CommonMethod.tsx";

interface VimanasOwnProps {
    nameComp: string;
}

class Vimanas extends React.Component <VimanasOwnProps> {



    render() {

        // FROM PARENT PROPS - STATE  YING YANG
        const {nameComp
            } = this.props;

        return (
            <div>
             <button >THIS IS Vimana BUTTON : {nameComp}</button>
             <label>THIS IS VIMANAS STATE :</label>
            </div>
        );
    }
}

export default commonMethod(Vimanas);