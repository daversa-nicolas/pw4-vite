import {Component} from "react";
import TableSample from "../components/TableSample.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "../components/Home.tsx";
import DestructuringTesting from "../components/DestructuringTesting.tsx";
import FormSample from "../components/FormSample.tsx";
import PassingDataRef from "../components/PassingDataRef.tsx";
import GeneralHoc from "../components/hoc/GeneralHoc.tsx";
import CommonRelegate from "../components/render-props-vs-hoc/CommonRelegate.tsx";
import AppHook from "../components/hooks/AppHook.tsx";


class RoutesLine extends Component{

    render(){
            return(
                <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/TableSample" element={<TableSample/>}/>
                    <Route path="/DestructuringTesting" element={<DestructuringTesting/>}/>
                    <Route path="/FormSample" element={<FormSample/>}/>
                    <Route path="/PassingDataRef" element={<PassingDataRef/>}/>
                    <Route path="/GeneralHoc" element={<GeneralHoc/>}/>
                    <Route path="/CommonRelegate" element={<CommonRelegate/>}/>
                    <Route path="/AppHook" element={<AppHook/>}/>

                </Routes>

                </div>
            )
     }
}

export default RoutesLine;