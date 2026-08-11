import * as React from "react";

interface StatesPassingRef {
    name: string;
    count: number;}


class PassingDataRef extends React.Component <Record<string, never>,StatesPassingRef>{

    objRef: React.RefObject<HTMLInputElement | null>;
    objSetState: React.RefObject<HTMLInputElement | null>;

    constructor(props: Record<string, never>) {
        super(props);

        this.state = {
            name: "initial VALUE constructor",
            count: 0
        }

        this.objRef = React.createRef<HTMLInputElement>();
        this.objSetState= React.createRef<HTMLInputElement>();

    }

    // INCREASING VALUE SYNCROUNUS with REF
    private countRef = { current: 0 };

    increasingByRef=()=> {
        alert("INCREASING WITH REF ASYNCROUNUS");
        this.countRef.current=this.countRef.current+1;
        console.log("COUNT VALUE INCREASING WITH REF - NOT-TRIGGED NEW RENDER : " +
            this.countRef.current);
    }
    /*  <h3 ref={this.objRef}>COUNT WITH REF : {this.countRef.current}  </h3>*/

    upDatingSyncronous= (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value);
        this.setState({
            name: e.currentTarget.value
        })
        console.log(this.objRef.current);
    }

    onClickIncresSetState =
        (e: React.MouseEvent<HTMLButtonElement>) => {
        alert("INCREASING BY SETSTATE ASYNCROUNUS");
            console.log(e.currentTarget.value);
            this.setState({
                count: this.state.count+1
            })
            console.log("AFTER UPDANTING SETSTATE ASYNCROUNUS AND BEFORE RENDER : "+this.state.count);
        }

    componentDidMount() {
        // the VALUE IMMEDIATLY MOFIFIE AFTER RENDER ( WITH OUT setState MODIFICATION

        if (this.objRef.current !== null) {
            this.objRef.current.style.color = "grey";
            this.objRef.current.style.fontFamily= "courier new, courier, monospace";

            console.log(this.objRef.current.style);
            console.log("NAME PROPERTY IMMEDIATLY CONTRUSC  : "+this.state.name);
            console.log("COUNT PROPERTY IMMEDIATLY CONSTRU : "+this.state.count);
        }
    }

    componentDidUpdate(_prevProps: Readonly<Record<string, never>>,
                       prevState: Readonly<StatesPassingRef>) {
        if ((this.objRef.current !== null) && (this.objSetState.current !== null)) {
            this.objRef.current.style.color = "red";
            this.objSetState.current.style.color = "green";
            this.objRef.current.name="UPDATED  VALUE WITG REF";
        }
        console.log("AFTER UPDATE DID UPDATE : "+ prevState.name);
    }

    render(){

        const {name, count} = this.state

        return(
            <div>

                <div>
                    PASSING SYNCRONOUS DATA REF WORK!
                </div>

                <h3 ref={this.objRef}>VALUE :{name}  </h3>
                <h3 ref={this.objSetState}>COUNT BY SETSTATE : {count}  </h3>
                <h3 ref={this.objRef}>COUNT WITH REF : {this.countRef.current}  </h3>
                <input  type="text"
                       value={name}
                       onChange={this.upDatingSyncronous}
                />



                <button style={{
                    fontSize: "15px",
                    padding: "10px 20px",
                    margin: "10px 10px",
                    backgroundColor: "lawngreen"
                    }} type="button" onClick={this.onClickIncresSetState} value="click">
                    CHANGING ONCLICK WITH SETSTATE ASYNCROUNUS
                    AND TRIGGERING NEW RENDER
                </button>

                <button style={{
                    fontSize: "15px",
                    padding: "10px 20px",
                    margin: "10px 10px",
                    backgroundColor: "red"
                }} type="button" onClick={this.increasingByRef} value="click">
                    CHANGING ONCLICK WITH REF SYNCROUNUS AND NOT-TRIGGERING NEW RENDER
                </button>


            </div>

        )
    }

}
export default PassingDataRef;