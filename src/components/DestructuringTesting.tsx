import {Component} from "react";
// import "./DestructuringTesting.scss";
class DestructuringTesting extends Component {
    /*


        constructor(props) {
           super;

        }
    */


    arrayOutput = (dummyVar : string) => {
        console.log(dummyVar);
    }


render(){

    // TSTING DESTRUCTURING ELEMENTS OF ARRAY
    const array1 =
        ["VIMANAS 156", "bleu",  "144560001"];

//    const [marque, couleur, serie] =
  //      array1;

    const [marque, couleur, ...finals]=array1
    console.log(marque, couleur, finals);
    console.log(array1[0], array1[1], array1[2]);
    console.log(finals);

    // TESTING DESTRUCTURING ELEMENT OF OBJECT
    const object1 = {marqueElem: "VIMANAS 156", couleurElem: "bleu", serieElem: "40001",
    essage: "TESTING DESTRUCTURING ELEMENT OF OBJECT", color: "red"};
    // must HAVE SAME NAME ELEMENT OF BUILTED OBJECT

    //  const {marqueElem, couleurElem, serieElem} = object1;
    // NOT POSSIBLE USIGN DESTRUCTURING ASSIGNEMENT TWO TIMES ON SAMES OBJECT,
    // OR USING DESTRUCTURING ONCE OR NOT
    const {marqueElem, ...restElems} = object1;

    // OUTPUT NO PROBLEM CAN THE EFFECT in OGBJETS ELEMENT IS THE SAME
    console.log(object1.marqueElem, object1.couleurElem, object1.serieElem);
    console.log(marqueElem+

        restElems.serieElem+
        restElems.essage+
        restElems.color);
    // interery ONJECT
    console.log(restElems);


    return(
        <div>
            <div>DESTRUCTURING TESTING COMPOSANT WORKS!</div>
            <div>
                {array1[0]} TESTING
            </div>

            <button onClick={()=>this.arrayOutput(marque)}>AFFICHE ARRAY :</button>
            <label>{finals}</label>

             {/*
                <button onClick={this.arrayLog}>AFFICHE ARRAY :</button>
                <label>{this.restElement}</label>*/}
        </div>
    )
}

}

export default DestructuringTesting;