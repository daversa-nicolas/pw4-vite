import {Component} from "react";
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
                        <button className="button">HOME</button>
                    </NavLink>
                    </div>

                    <div>
                    <NavLink className={eleBarr} to="/TableSample">
                        <button className="button">TABLE LINK</button>
                    </NavLink>
                    </div>

                </nav>

            </div>

        )
    }

}
export default Header;