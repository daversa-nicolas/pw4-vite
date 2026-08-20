

//CHILDREN (2) AccountUSEEFF
import {useEffect, useState} from "react";

function AccountUseEffect() {
    // initial state 3
    const [count, setCount] = useState(3);
    const [name, setName] = useState('');

    // this HOOK consente de make the same of
    // componentDidMount, componentDidUpdate,componentDinUnmount
    // avec succession conditionnel on peut pas calling inutils
    useEffect(() => {
        console.log("CLICKED CALL NUM FOIS "+count/3);
    }, [count])
    // , [count]) INDIQUE QUE LE USEEFFECT SE DECLENCE SEUL SI LA FONCTION
    // CAUSE A MODIFICATION ONLY
    // CE DEUXIEME  PARAMETER AVOID THE DECLENCEMENT
    // DE USEEFFECT INUTILES
    // COMME componentDidUpdate (prevProps, prevState){
    //       if(this.state.count !== prevState.count){
     //           document.title = `You clicked ${this.state.count} times`;
       //     }
    // ne declence que en cas of change state.count.

    const sumOutput = () => {
        setCount(prevCount => {
            console.log("COUNT INCREASING PREVIOUS: " + prevCount);
            const nextCount = prevCount + 3;
            console.log("COUNT INCREASING AFTER ASSIGNEMENT: " + nextCount);
            // Affiche de Value 3 in console syncrone
            return nextCount;
        });
    }


    return (

        <div>
            ACCOUNTUSEFFECT COMP WORK!
            <input style={{fontSize:"20px"}} type="text" value={name}
                   onChange={(e) => setName(e.target.value)}/>/
            <div>COUNT : {count}</div>
            <button  style={{fontSize:"20px"}} onClick={sumOutput}>CLICK INCREASING</button>
        </div>
    )
}

export default AccountUseEffect;