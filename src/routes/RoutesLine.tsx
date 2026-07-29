import {Component} from "react";
import TableSample from "../components/TableSample.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "../components/Home.tsx";

class RoutesLine extends Component{

    render(){
            return(
                <div>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/TableSample" element={<TableSample/>}/>
                </Routes>

                </div>
            )
     }
}

export default RoutesLine;