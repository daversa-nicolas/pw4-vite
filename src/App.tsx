import {Component} from 'react';
import Mycars, {type titleProps} from './components/Mycars';

import './App.css'

const parentElement = "parentApp"

type AppProps = Record<string, never>;

interface AppState {
    myCar1: titleProps;
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
            }
        }

    }


    // HORS CONTRUCTOR fonction avec event that modify STATE of interely object
    onClickIncreasing =
        (e: React.MouseEvent<HTMLButtonElement>) => {
            alert("CLICKED");
            console.log(e.currentTarget.value);
            this.setState({

                myCar1: {
                    title: "MODIFIED TITLE",
                    color: "red",
                    indexOfCars: this.state.myCar1.indexOfCars+1
                }

            })
        }

        onClickIncByPara=(e) => {
            alert("CLICKED BY INPUT");
            console.log(e.target.value);
            this.setState({

                myCar1: {
                    title: e.target.value,
                    color: "red",
                    indexOfCars: this.state.myCar1.indexOfCars+1
                }

            })
        }


    render(){
        const {title, color} = this.state.myCar1;
        return (
            <div className={parentElement}>

                <Mycars title = {title}
                        color= {color}
                        indexOfCars={this.state.myCar1.indexOfCars}/>
                <div>
                    <label htmlFor="fname">ADD TITLE OF THIS COLOR _{color}_ :</label>
                    <input type="text" id="fname" name="fname" value={this.state.myCar1.title}/>
                    <input type="text" id="fname" name="fname"
                           onChange = { this.onClickIncByPara}
                           value={this.state.myCar1.title }/>

                    <div>
                        <button onClick={this.onClickIncreasing} value="click">
                            CHANGING
                        </button>
                        <button onClick={ ()=>this.onClickIncByPara("this id dummy INPUT OK")} value="click">
                            CHANGING BY INPUT
                        </button>
                    </div>

                </div>

            </div>


        )
    }
}

export default App
