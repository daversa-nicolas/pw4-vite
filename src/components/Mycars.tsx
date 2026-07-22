import { Component } from 'react';
import Cars, {type CarsInter} from './Cars';
import './Mycars.scss'
import Wrapper from "./Wrapper";

// THIS IS PROPS from PARENT MUST HAVE SAME
// TYPE Inteface ARE PROPS NOT STATE
export interface titleProps {
    title: string;
    color: string;
    indexOfCars: number;
}

export type ArrayCars = CarsInter[];

// CREATING car OF INTERFACE
export interface MycarsState {
    car: ArrayCars;
    // car1: ArrayCars;
}

// DEFINE STATES TO PASSING IN
// COUPLES PROPS STATES IN
// COMPONENT CARS

const elementMycar = "parentMycars";



class Mycars extends Component <titleProps, MycarsState> {

    // DEFINITED PROPS AS OBJET TEMPLATE OF PARENT ALWAYS
    // IN CONSTRUCTOR AFTER NO USING titleProps
    // BUT props TO ACCES FIELDS
    constructor(props: titleProps){
        super(props);

        // ONLY STATE HERE NO PROPS
        this.state= {
            // PROPS FROM PARENTS
            // and STATES DEFINITED
            // title: props.title,
            // color: props.color,

            // this STATE DEFINITED IN
            // SAME CHILDREN CLASS COMPONENT

            // DEFINE ELEMENTS OF ARRAY INTERFACE CAR
            car : [
                // FIRST ELEMENT OF ARRAY CAR <CarsInter>
                {
                    marque: "VIMANAS 156",
                    couleur: "bleu",
                    serie: 144560001
                },
                {
                    marque: "mini 88",
                    couleur: "green",
                    serie: 4353
                },
                {
                    marque: "VIMANAS 56",
                    couleur: "bleu",
                    serie: 144560001
                }
            ]
/*
            // DEFINE ELEMENT AN OBJET OF INTERFACE
            car1= {
                marque: "VIMANAS 56",
                couleur: "bleu",
                serie: 144560001
            },
            car2 =  {
                marque: "mini",
                couleur: "green",
                serie: 4353
            },
            car3:  {
                marque: "HAGAKURE",
                couleur: "yellow",
                serie: 456240002
            }
*/
        }

    }


    render() {

        // NOTE COLOR IS AN OBJET
        const {title, color, indexOfCars} = this.props;
        const {car} = this.state;
        // const { marque, couleur, serie } = this.state.car2;
        // const { marque, couleur, serie } = this.state.car3;

        return (
            <div className={elementMycar}>


                <div>
                    <Wrapper>
                        <h1 style={{color}}>THE MODIFIED FIELD: {title} INDEX OF CAR IS : {indexOfCars}</h1>
                    </Wrapper>
                </div>

                <div>
                    <Cars marque={car[0].marque}
                          couleur={car[0].couleur}
                          serie={car[0].serie}/>
                </div>

                <div>
                    <Cars marque={car[1].marque}
                          couleur={car[1].couleur}
                          serie={car[1].serie}/>
                </div>

                <div>
                    <Cars marque={car[2].marque}
                          couleur={car[2].couleur}
                          serie={car[2].serie}/>
                </div>

            </div>
        )
    }
}

export default Mycars;