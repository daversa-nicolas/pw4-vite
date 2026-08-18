import {Component} from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

class Header extends Component {

    // DEFINITED PROPS IN CONSTRUCTOR AFTER NO USING CAR
    // BUT PROPS TO ACCES FIELDS


    render() {
        const eleBarr = "eleBarr1";
        const navBarre="navBarr1";

        return (

            <div>
                <nav className={navBarre}>

                    <div>
                    <NavLink className={eleBarr} to="/">
                        <button className="buttonSty">HOME</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/TableSample">
                        <button className="buttonSty">TABLE LINK</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/DestructuringTesting">
                        <button className="buttonSty">DESTRUCTURING SAMPLES LINK</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/FormSample">
                        <button className="buttonSty">FORM SIMPLE</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/PassingDataRef">
                        <button className="buttonSty">PASSING SYNCRONOUS DATA REF</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/GeneralHoc">
                        <button className="buttonSty">DATA IN HOC CALLING METHODS FROM PARENT AND CHILDREN</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/CommonRelegate">
                        <button className="buttonSty">RENDER PROPS AND DATA FETCH</button>
                    </NavLink>
                    </div>

                </nav>

            </div>

        )
    }

}
export default Header;