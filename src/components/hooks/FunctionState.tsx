//import React from 'react';
import {useState} from "react";

function FunctionState() {

    const [count, setCount] = useState(2);

    // THIS IS VERSION NON FUNCTIONAl AVEC ASYNCRONIE
    /*
    const sumClick = ()  => {
        setCount(count + 1);
        console.log("COUNT INCREASING : " + count);
    }*/

    // THIS IS VERSION FUNCTIONAL OU LE VALUE EST
    // IMMEDIALTY INCREASING en DEVENANT SYNCRONE (AVANT DOM
    // AFFICHE L'ASSIGNEMENT

    const sumClick = () => {
        setCount(prevCount => {
            const nextCount = prevCount + 2;
            console.log("COUNT INCREASING : " + nextCount);
            // Affiche de Value 3 in console syncrone
            return nextCount;
        });
    }
    // calling sumClick est un gestionnaire , un event handler
    // Elle exécute des actions (setCount, console.log) mais elle ne renvoie aucune
    // valeur
    // au bouton qui l'a cliquée. Son type of  return réel est donc void.
    return (
            <div>
            FUNCTION STATE MULTIPLE RESLUTIONS : {count}
            <button onClick={sumClick}>CLICK ME</button>
            </div>
    )

}

export default FunctionState;
