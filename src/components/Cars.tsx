import {Component} from "react";
import './Cars.css'

export interface Car {
    marque:string;
    couleur: string;
    serie: number;
}

const elementcars = "elementCars";
const fieldsinternal = "fieldsCars";

class Cars extends Component<Car> {

    // DEFINITED PROPS IN CONSTRUCTOR AFTER NO USING CAR
    // BUT PROPS TO ACCES FIELDS
    constructor(props: Car){
        super(props);
    }


    render(){
        return (
            <div className={elementcars}>

                <div className={fieldsinternal}>
                    MARQUE: {this.props.marque}
                </div>

                <div className={fieldsinternal}>
                    COULEUR: {this.props.couleur}
                </div>

                <div className={fieldsinternal}>
                    SERIE: {this.props.serie}
                </div>
            </div>
        )

    }

}
export default Cars;