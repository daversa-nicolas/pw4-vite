import {Component, type JSX} from "react";
import * as React from "react";
import InputPure, {type InputProps} from "./InputPure";


// without import interface from a child
interface TableStateTemplate {
    model : string;
    // type ARRAY OF STRING
    selectedVimanas : string;
    typesVimanas : string[];
    yearManufacture : number;
    validatedForm: boolean;
    nameChildren: InputProps;
}


// NO PROPS FROM PARENTS
class FormSample extends Component <Record<string, never>, TableStateTemplate> {

    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            model: "",
            selectedVimanas:"",
            typesVimanas: ["-","Dvapara-yuga","Shakina","Kaliyuga","Kamayuga","Vimaanika Shastra antigravity","Vikina"],
            yearManufacture: 0,
            validatedForm: true,
            nameChildren:{
                name: "THIS NAME TO CHIDREN COMPONENT FROM PARENT"
            }
        }
    }


    fonctionSubmitF = (e:
                       React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("MODEL INPUT : "+this.state.model + "TYPE SCROLL INPUT : "
            + this.state.selectedVimanas + "YEAR MANUFACTURE INPUT : "
            + this.state.yearManufacture)

        alert("SUBMITTED WORKING");
        // TO NO ENTER RENDER IN THE CASE NO DATA FORM MUTED

        this.setState({
            nameChildren: {
                name: " MODIFIED NAME CHILDREN BT HANDLER FORM "
            }
        })
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


    //LIFECYCLE METHODS START

    // only static beacause no data props - state received from parent
    static getDerivedStateFromProps() {
        console.log("MOUNTING PHAS : ---->>> GET DERIVED STATE FROM PROPS WORKING" +
            "DANS TOUS LES CASE CALLED PHASES <<<-----");
        return null;
    }

    componentDidMount() {
        console.log(" 4eme MOUTING PHAS : COMPONENT DID MOUNT WORKING");
        // CAUSE OF ASYNCRONOUS NEED UNE PREVSTATE TO ADD THE 0 STARTING VALUE IN CONSTRUCTOR
        this.setState(
            (prevState) => ({
                yearManufacture: prevState.yearManufacture + 3,
            }),
            () => {
                console.log(
                    "THIS IS MODIFIED MANUFACTURE DID MOUNT: " + this.state.yearManufacture
                );
                console.log("THIS IS MODIFIED MANYFACTURE BY ETRES SUBTILES:" + this.state.yearManufacture)
            }
        )
    }
    // RETURN BOOLEAN TYPE
    // _nextProps in the case no props provenance from parents
   /* shouldComponentUpdate(_nextProps: Readonly<Record<string, never>>,
                          nextState: TableStateTemplate): boolean {
        // NOT USE USING IF USING PURE COMPONENT

        if(nextState.validatedForm === true){
            // UPDATING RENDER STEP
            return true;
        }

        return false;

    }*/


    // 7eme/2PHASE - LAST METHOD UPDATING
    componentDidUpdate() {
        console.log("2eme UPDATING PHASE : COMPONENT DID UPDATE WORKING");
        console.log("2eme UPDATING 2eme UPDATING PHAS  PREVIOUS STATE YEAR : " + this.state.yearManufacture)
        console.log("2eme UPDATING PREVIOUS STATE : " + this.state.model)
        console.log("2eme UPDATING NOW STATE YEAR : " + this.state.yearManufacture)
        console.log("2eme UPDATING NOW STATE MODEL : " + this.state.model)
    }

    render() {
        console.log("3eme MOUNTING PHAS : ---->>> RENDERING  WORKING <<<<<-------");
        const {typesVimanas, selectedVimanas} = this.state;
        const {name} = this.state.nameChildren;

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

                <InputPure name={name}/>

            </div>
        )
    }
}

export default FormSample;