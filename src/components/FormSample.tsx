import {Component, type JSX} from "react";
import * as React from "react";


// without import interface from a children
interface TableStateTemplate {
    model : string;
    // type ARRAY OF STRING
    selectedVimanas : string;
    typesVimanas : string[];
    yearManufacture : number;
}

// NO PROPS FROM PARENTS
class FormSample extends Component <Record<string, never>, TableStateTemplate> {

    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            model: "",
            selectedVimanas:"",
            typesVimanas: ["-","Dvapara-yuga","Shakina","Kaliyuga","Kamayuga","Vimaanika Shastra antigravity","Vikina"],
            yearManufacture: 0
        }
    }


    fonctionSubmitF = (e:
                       React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("SUBMITTED WORKING");
        console.log("MODEL INPUT : "+this.state.model + "TYPE SCROLL INPUT : "
            + this.state.selectedVimanas + "YEAR MANUFACTURE INPUT : "
            + this.state.yearManufacture)
    }

    handleModel = (e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            model : e.target.value,
        })
        console.log(this.state.model)
    }

    handleTypeSingle=(e:React.ChangeEvent<HTMLInputElement |
        HTMLSelectElement>)=>{
        this.setState({
            selectedVimanas:e.target.value
        })
        console.log(this.state.selectedVimanas)
    }


    handleYear=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            yearManufacture : Number(e.target.value),
        })
    }



render() {
    const {typesVimanas, selectedVimanas} = this.state;

    let i: number = 0;
    // DECLARING
    const vimanaElements: JSX.Element[] = [];

    do {
        // pushing in scrool option all element of
        vimanaElements.push(
            <option key={i}>
                {this.state.typesVimanas[i]}
            </option>
        );

        i=i+1;

    } while(i < typesVimanas.length);

        return (
            <div>
                <form onSubmit={this.fonctionSubmitF}>
                <div>
                    <label>
                        1FIRST FIELD - MODEL OF VIMANAS
                        ANTIGRAVITY
                        UNIVERSITY
                        HEJILOUYANG :</label>
                    <input type = "text"
                        value = {this.state.model}
                        onChange={this.handleModel}
                    />
                </div>


                    <label>2SECOND FIELD - TYPE : </label>
                    <input
                        type = "text" size={32}
                        value = {selectedVimanas}
                        onChange={this.handleTypeSingle} />

                    <label>3THIRDY FIELDS - TYPE SELECTION: </label>
                    <select value={selectedVimanas} onChange={this.handleTypeSingle}>
                        {vimanaElements}
                    </select>

                    <label>YEAR MANUFACTURE : </label>
                    <input
                        type = "number"
                        value = {this.state.yearManufacture}
                        onChange={this.handleYear} />

                    <button type = "submit">SUBMIT FORM</button>


                </form>
                <button > RESET FORM </button>
            </div>
    )
    }
    }

    export default FormSample;