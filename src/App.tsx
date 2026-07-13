import {Component} from 'react';
import Mycars, {type titleProps} from './components/Mycars';

import './App.css'

const parentElement = "parentApp"

interface AppState {
    myCar1: titleProps;
}

class App extends Component <titleProps,AppState> {

    constructor(props: titleProps) {
        super(props);

        this.state =   {
            myCar1: {
                title: "MY LIST CARS ANTIGRAVITY ZONE 51",
                color: "green"
            }
        }

    }

  render(){
      const {title, color} = this.state.myCar1;
      return (
          <div className={parentElement}>

            <Mycars title = {title}
                    color= {color}/>
          </div>
      )
  }
}
export default App
