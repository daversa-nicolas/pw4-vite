import {Component} from "react";
import './Cars.css'
//import Wrapper from "./Wrapper";

// REFINED INTERFACE ARRAY OF CARS
/*
export interface Car {
    marque:string;
    couleur: string;
    serie: number;
}
*/

export interface CarsInter {
    marque:string;
    couleur: string;
    serie: number;
}


const fieldsinternal = "fieldsinternal";

class Cars extends Component<CarsInter> {

    // DEFINITED PROPS IN CONSTRUCTOR AFTER NO USING CAR
    // BUT PROPS TO ACCES FIELDS
    constructor(props: CarsInter){
        super(props);
    }


    render() {

        return (

                <tr>

                        <td className={fieldsinternal}>
                            MARQUE: {this.props.marque}
                        </td>

                        <td className={fieldsinternal}>
                            COULEUR: {this.props.couleur}
                        </td>

                        <td className={fieldsinternal}>
                            SERIE: {this.props.serie}
                        </td>


                </tr>


        )

    }

}
export default Cars;