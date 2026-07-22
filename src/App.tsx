import {Component} from 'react';
import * as React from "react";

import Mycars from './components/Mycars';
import type {titleProps, ArrayCars} from './components/Mycars';

import './App.css'

type AppProps = Record<string, never>;

interface AppState {
    myTitle: titleProps;
    myCarArray: ArrayCars;
    name: string;
}

class App extends Component <AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        //e constructeur est le seul endroit où vous devriez
        // affecter directement une valeur à this.state sans
        // passer par la méthode setState() car cette dernière
        // est strictement interdite dans le constructor().
        this.state =   {

            myTitle: {
                title: "MY LIST CARS ANTIGRAVITY ZONE 51",
                color: "green",
                indexOfCars: 3
            },

            myCarArray : [
                // FIRST ELEMENT OF ARRAY CAR <CarsInter>
                {
                    marque: "DEFINED IN APP VIMANAS 156",
                    couleur: "BROWN",
                    serie: 1445541
                },
                {
                    marque: "DEFINED SECOND ELEMENT VIMANAS 156",
                    couleur: "YELLOW",
                    serie: 5485
                }
                ]
                ,

            name: "using DEFAULT NAME individual"

        }

//Shouldn’t the this value point to the global object,
// since we are running this in non-strict mode according to
// the rules of default binding?” you might ask.
// No. This is why:
        //Strict mode applies to entire scripts or to individual functions
        // . It doesn't apply to block statements enclosed in {} braces;
        // attempting to apply it to such contexts does nothing. eval code,
        // Function code, event handler attributes, strings passed to
        // setTimeout(), et les fonctions connexes sont soit des corps
        // de fonctions, soit des scripts entiers, et l'invocation d'un
        // mode strict en eux fonctionne comme prévu.
//            The bodies of class declarations and class expressions are
//            executed in strict mode, that is the constructor, static
//            and prototype methods. Getter and setter functions are executed
//            in strict mode.
        // So, to prevent the error, we need to bind the this value like this:
        // the context of THIS in a event handler is not bound by default:
        // we need to bind this MANUALLY to access props and state
        // We need to bind these methods to the component instance using .bind()
        // in our custom component’s constructor.

        this.handleChangeStates=this.handleChangeStates.bind(this);
        this.handleSubmitForm=this.handleSubmitForm.bind(this);

    }

    // HORS CONTRUCTOR fonction avec event that modify STATE of interely object
    onClickIncreasingTs =
        (e: React.MouseEvent<HTMLButtonElement>) => {
            alert("CLICKED");
            console.log(e.currentTarget.value);
            this.setState({

                myTitle: {
                    title: "USING INCREASINT BUTTOM",
                    color: "red",
                    indexOfCars: this.state.myTitle.indexOfCars+1
                }

            })
        }

// CHANGING IN REACTIVE MODE
    onChangeSetInputTs=
        (e: React.ChangeEvent<HTMLInputElement>) => {

            // alert("NO CLIKEDBY INPUT");
            console.log(e.currentTarget.value);

            this.setState({

                myTitle: {
                    title: "USED CHANGE REACT",
                    color: "red",
                    indexOfCars: this.state.myTitle.indexOfCars+1
                },

                name: e.currentTarget.value

            })
        }


    onClickIncByParamTs=
        (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>)  => {

            console.log("ENTER ONCLISK BY PARAM")
            console.log(e.currentTarget.value);

            this.setState({
                    myTitle: {
                        title: e.currentTarget.value,
                        color: "red",
                        indexOfCars: this.state.myTitle.indexOfCars + 1
                    }
                }
            )
        }


    handleChangeStates (e: React.ChangeEvent<HTMLInputElement>) {

        this.setState({
            name: e.currentTarget.value
        })

        // alert("VALUE SAISI"+e.currentTarget.value)

    }

    handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert("THE NAME INPUT IN FORM IS_:_"+this.state.name);
        console.log(this.state.myTitle.color);
        console.log(this.state.name);
    }

    outputInterfaceArrayTs=
        ()=>    {
            console.log(this.state.myTitle.color);
            console.log("Called method outputInterfaceArrayTs OK");
            console.log(this.state.myCarArray[1].serie);
            console.log(this.state.myCarArray[0].marque);

        }


    render(){
        const {title, color} = this.state.myTitle;
        const {name} = this.state;
        //const {car} = this.state;
        return (
            <div>

                <Mycars title = {title}
                        color= {color}
                        indexOfCars={this.state.myTitle.indexOfCars}/>

                <div>


                    <label htmlFor="fname">ADD TITLE OF THIS COLOR _{color}_ :</label>


                    <label htmlFor="fname">{name}</label>


                    <input type="text"
                           id="dataChangeInstant"
                           name="fname"
                           value={name}
                           onChange={this.onChangeSetInputTs}
                    />



                    <input type="text"
                           id="dataInputByParam"
                           value={this.state.myTitle.title}

                           onChange = { this.onClickIncByParamTs }
                           readOnly={false}
                    />

                    <button type="button" onClick={this.onClickIncreasingTs} value="click">
                        CHANGING ONCLICK WITHOUT INPUT
                    </button>

                    <button type = "button"
                            onClick ={ this.onClickIncByParamTs}
                            value="click">
                        CHANGING BY INPUT ONCLICK
                    </button>
                    <div>STARTING FORM</div>
                    <form onSubmit={this.handleSubmitForm} >

                        <label>THIS IS THE INPUT FROM TO MODIFIER : {name}</label>

                        <input type="text"
                               defaultValue={this.state.myTitle.color}
                               onChange={this.handleChangeStates}
                        />

                        <button type="submit" value="buttom">
                            BUTTON FORM ENTER NAME SAISI
                        </button>



                    </form>
                    <div>TESTING AFTER FORM FROM DATA ARRAY</div>
                    <button type="button" onClick={this.outputInterfaceArrayTs} value="click">
                        BUTTON OUTPUT SELECTED DATA STATE
                    </button>


                </div>

            </div>


        )
    }
}

export default App
