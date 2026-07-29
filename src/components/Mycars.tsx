import {Component, Fragment, type JSX} from 'react';
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

// const elementMycar = "parentMycars";



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
                    marque: "VIMANAS1 156 1",
                    couleur: "bleu",
                    serie: 144560001
                },
                {
                    marque: "MODEL SOUCOUP ANTIGRAVITY VIMANAS ECHANGED IN ZONE 51",
                    couleur: "green",
                    serie: 4353
                },
                {
                    marque: "VIMANAS 56 3",
                    couleur: "bleu",
                    serie: 144561
                },
                {
                    marque: "VIMANAS 46 4",
                    couleur: "yellow",
                    serie: 144221
                },
                {
                    marque: "mini by retroingenierie of Vimanas antigravity  - 黑龙大学 - Université du Heilongjiang du fleuve\n" +
                        "dragon noir -  5",
                    couleur: "green",
                    serie: 4353
                },
                {
                    marque: "VIMANAS 5546 https://www.youtube.com/watch?v=Svn1gHu2pRU ",
                    couleur: "bleu",
                    serie: 143211
                }
            ]
            /*
                        // DEFINE ELEMENTS IN OBJET OF INTERFACE
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
    // END CONSTRUCTOR

    // do loop outside the tsx : no possible declaring let index inside
    // can't declare variables or use a do...while loop directly inside



    render() {
        console.log("LEIGHT_CAR_ARRAY : " + this.state.car.length);
        // NOTE COLOR IS AN OBJET
        const {title, color, indexOfCars} = this.props;
        const {car} = this.state;
        // const { marque, couleur, serie } = this.state.car2;
        // const { marque, couleur, serie } = this.state.car3;
        let i:number = 0;
        // DECLARING
        const carsElements: JSX.Element[] = [];

        // SELECTING ALL PAIR POSITION ELEMENT OBJECT OR AN
        // ELEMENT WITH 4353 PAIR/IMPAIR YING YANG
        do {
            if (i%2==0 || car[i].serie === 4353) {
                carsElements.push(

                    <Fragment key={i}>
                        <Cars
                        marque={car[i].marque}
                        couleur={car[i].couleur}
                        serie={car[i].serie}/>
                    </Fragment>

                );

                }else{
                //nothing
            };

            i=i+1;

        } while(i < car.length);

        const limitSup: number=6;

        return (

            <div>
                <div>
                    <Wrapper>
                        <h1 style={{color}}>THE MODIFIED FIELD: {title} INDEX OF CAR IS : {indexOfCars}</h1>
                    </Wrapper>
                </div>

                {/* output iteration elements in array carsElements TSX here */}
                <div>USING ITERATION DO ... LOOP IN TSX OUTSIDE RETURN</div>

                <table className="tableStyle">

                    <tr>
                        <th>MARQUE</th>
                        <th>AGE</th>
                        <th>COULEUR</th>
                    </tr>

                        {carsElements}

                </table>

                {carsElements[3].key}

                <div>USING ITERATION map IN TSX INSIDE RETURN NOT MORE COMBINATION AND POSSIBILITY EXCELLENTLY
                    FOR LIMIT ARRAY AND CONDITION TO OUTPUT ELEMENT</div>

                <table className="tableStyle">

                    <tr>
                        <th>MARQUE</th>
                        <th>AGE</th>
                        <th>COULEUR</th>
                    </tr>

                {car.slice(0,limitSup).map( (elemCar, index) =>
                    {
                        if( elemCar.serie === 4353 ){
                            return (
                                <Fragment key={index}>
                                <Cars
                                    key={index}
                                    marque={elemCar.marque}
                                    couleur={elemCar.couleur}
                                    serie={elemCar.serie}/>
                                </Fragment>
                            );
                        }else{
                            return null;
                        }

                    }
                )

                }
                </table>




                {/*<div>
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
                </div>*/}

            </div>
        )
    }
}

export default Mycars;