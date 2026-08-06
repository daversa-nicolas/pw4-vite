import {Component} from "react";
import "./TableSample.scss";
import ImagesHangar, {type ImageHangarS} from "./ImagesHangar.tsx";
//import * as React from "react";




interface TableState {
    imageHangar1: ImageHangarS;
}






class TableSample extends Component <Record<string, never>, TableState> {


    // DEFINITED PROPS IN CONSTRUCTOR AFTER NO USING CAR
    // BUT PROPS TO ACCES FIELDS

    constructor(props: Record<string, never>) {
        super(props);

        this.state = {
            imageHangar1: {
                colorProps: "green",
                nameImage: "brics-empire-techno-retroingenering-Vimanas"
            }
        }


    }


    render() {

        const {imageHangar1} = this.state;

        return (

            <>
                <div style={{display:'flex', flexDirection:'column'}}>TABLE SAMPLE WORK</div>

                <table className="tableStyle">
                    <thead>
                    <tr>
                        <th>MERQUE</th>
                        <th>AGE</th>
                        <th>COULEUR</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>...</td>
                    </tr>
                    </tbody>



                </table>

                <ImagesHangar colorProps={imageHangar1.colorProps} nameImage={imageHangar1.nameImage}/>


            </>


        )

    }

}
export default TableSample;