import {Component} from 'react';
import * as React from "react";

import Mycars, {type titleProps} from './components/Mycars';

import './App.css'


const parentElement = "parentApp"

type AppProps = Record<string, never>;

interface AppState {
    myCar1: titleProps;
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

            myCar1: {
                title: "MY LIST CARS ANTIGRAVITY ZONE 51",
                color: "green",
                indexOfCars: 3
            },

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

                myCar1: {
                    title: "USING INCREASINT BUTTOM",
                    color: "red",
                    indexOfCars: this.state.myCar1.indexOfCars+1
                }

            })
        }

// CHANGING IN REACTIVE MODE
    onChangeSetInputTs=
        (e: React.ChangeEvent<HTMLInputElement>) => {

            // alert("NO CLIKEDBY INPUT");
            console.log(e.currentTarget.value);

            this.setState({

                myCar1: {
                    title: "USED CHANGE REACT",
                    color: "red",
                    indexOfCars: this.state.myCar1.indexOfCars+1
                },

                name: e.currentTarget.value

            })
        }


    onClickIncByParamTs=
        (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>)  => {

            console.log("ENTER ONCLISK BY PARAM")
            console.log(e.currentTarget.value);

            this.setState({
                    myCar1: {
                        title: e.currentTarget.value,
                        color: "red",
                        indexOfCars: this.state.myCar1.indexOfCars + 1
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
        console.log(this.state.myCar1.color);
        console.log(this.state.name);
    }

    render(){
        const {title, color} = this.state.myCar1;
        const {name} = this.state;
        return (
            <div className={parentElement}>

                <Mycars title = {title}
                        color= {color}
                        indexOfCars={this.state.myCar1.indexOfCars}/>

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
                           value={this.state.myCar1.title}

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

                    <form onSubmit={this.handleSubmitForm} >

                        <label>THIS IS THE INPUT FROM TO MODIFIER : {name}</label>

                        <input type="text"
                               defaultValue={this.state.myCar1.color}
                               onChange={this.handleChangeStates}
                        />

                        <button type="submit" value="buttom">
                            B FORM ENTER NAME SAISI
                        </button>


                    </form>

                </div>

            </div>


        )
    }
}

export default App
