import { Component } from 'react';
import Cars, {type Car} from './Cars';
import './Mycars.scss'
import Wrapper from "./Wrapper.tsx";

// THIS IS PROPS from PARENT MUST HAVE SAME
// TYPE Inteface ARE PROPS NOT STATE
export interface titleProps {
    title: string;
    color: string;
}

export interface MycarsState {
    car1: Car;
    car2: Car;
    car3: Car;
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
            car1:  {
                marque: "VIMANAS 56",
                couleur: "bleu",
                serie: 144560001
            },
            car2:  {
                marque: "mini",
                couleur: "green",
                serie: 4353
            },
            car3:  {
                marque: "HAGAKURE",
                couleur: "yellow",
                serie: 456240002
            }
        }

    }


    render() {

        // NOTE COLOR IS AN OBJET
        const {title, color} = this.props;
        const {car1, car2, car3} = this.state;

        return (
            <div className={elementMycar}>


                <div>
                    <Wrapper>
                        <h1 style={{color}}>{title}</h1>
                    </Wrapper>

                </div>
                <div>
                    <h1>
                        <Cars marque={car1.marque}
                              couleur={car1.couleur}
                              serie={car1.serie}/>
                    </h1>
                </div>
                <div>
                    <Cars marque={car2.marque}
                          couleur={car2.couleur}
                          serie={car2.serie}/>
                </div>

                <div>
                    <Cars marque={car3.marque}
                          couleur={car3.couleur}
                          serie={car3.serie}/>
                </div>

            </div>
        )
    }
}

export default Mycars;