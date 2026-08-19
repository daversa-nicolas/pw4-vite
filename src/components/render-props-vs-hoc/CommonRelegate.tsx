import PropRenderPattern from "./PropRenderPattern.tsx";
import PropRenderTheLabel from "./PropRenderTheLabel.tsx";
import Rukma from "./Rukma.tsx";
import {useState} from "react";
import Pushpaka from "./Pushpaka.tsx";

// commonrelegate is the composabnt trhat implement prop
// proppatterrender  so to calling in routing directly
//CHILDREN (1)PROP RENDERTHRELABEL
    export default function CommonRelegate() {
        // État local au parent pour stocker la valeur reçue de l'enfant Rukma
        const [nomSelectionne, setNomSelectionne] = useState<string>("");

        // Cette fonction sera passée à l'enfant Rukma.
        // Quand Rukma clique, "RUKMA_NAME" arrive ici dans 'nameFromChild'
        const handleAddName = (nameFromChild: string): void => {
            setNomSelectionne(nameFromChild);
        };

        return (
            <div>
                <PropRenderPattern render={

                    ({x, y}) => (
                        <div>
                            MOUSE IS IN THIS POSITION OF SQUARE: ({x} , {y})
                        </div>
                    )}/>


                {/*
            React s'exécute de manière stricte : si le composant appelé ne génère qu'un <label>,
            aucun bouton n'apparaîtra automatiquement dans le DOM.
*/}
                {/*
              1. On affiche le composant Rukma.
              C'est LUI qui contient le vrai bouton et son state.name ("RUKMA_NAME")
            */}
                <Rukma addName={handleAddName}/>
                <Pushpaka addName={handleAddName}/>

                <PropRenderTheLabel render={

                    ({nameVimana}) =>
                        (
                            <div>
                                {/*On utilise 'nomSelectionne' ici !
                          Si aucun clic n'a eu lieu, on affiche la valeur par défaut de la render prop.
                        */}

                                <label>
                                    THIS IS THE NAME BUTTON YOU CLIKED: {nomSelectionne || nameVimana}
                                </label>


                            </div>)


                }/>


            </div>

        );


    }


