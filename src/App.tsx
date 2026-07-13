import {Component} from 'react';
import Mycars, {type titleProps} from './components/Mycars';

import './App.css'

const parentElement = "parentApp"

interface AppState {
    titre: string;
    color: string;
}

class App extends Component <titleProps,AppState> {

    constructor(props: titleProps) {
        super(props);

        this.state =   {
            titre: "MY LIST CARS ANTIGRAVITY ZONE 51",
            color: "green"
        }

    }

  render(){
      const {titre, color} = this.state;
      return (
          <div className={parentElement}>

            <Mycars title = {titre}
                    color= {color}/>
          </div>
      )
  }
}
export default App
