import {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css'

const parentElement = "parentApp"

class App extends Component {

  state =   {
      titre: "MY LIST CARS",
      color: "gold",
      fontFamily: "Courier New, Courier, monospace"
  }

  render(){
      return (
          <div className={parentElement}>

            <Mycars title = {this.state.titre}
                    color={this.state.color}
                    fontFamily={this.state.fontFamily}/>
          </div>
      )
  }
}
export default App
