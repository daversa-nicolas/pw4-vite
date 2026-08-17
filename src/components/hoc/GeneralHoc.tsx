import React from 'react';
import Veda from "./Veda.tsx";
import Vimanas from "./Vimanas.tsx";

class GeneralHoc extends React.Component {

    render() {
        return (
            <div>
                <Veda nameComp="VEDA"/>
                <Vimanas nameComp="VIMANAS"/>


            </div>
        );
    }
}

export default GeneralHoc;