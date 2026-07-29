import {Component} from "react";
import "./TableSample.scss";
class TableSample extends Component {

    // DEFINITED PROPS IN CONSTRUCTOR AFTER NO USING CAR
    // BUT PROPS TO ACCES FIELDS


    render() {

        return (

            <>
                <div style={{display:'flex', flexDirection:'column'}}>TABLE SAMPLE WORK</div>
                <table className="tableStyle">

                    <tr>
                        <th>MERQUE</th>
                        <th>AGE</th>
                        <th>COULEUR</th>

                    </tr>

                </table>


            </>


        )

    }

}
export default TableSample;