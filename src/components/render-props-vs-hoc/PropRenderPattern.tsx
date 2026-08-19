import React from "react";
import  type {JSX} from "react";
import type {MouseEvent} from "react";

// definition state
interface PropRenderPatternState {
    /*
    // REJECTE PAR  STATE IN CONSTRUCTOR:
     Le problème vient de cette inner  "state"
    state: {
        x: number,
        y: number
    }*/

        x: number,
        y: number

}


// definition props note here is render as function
interface PropRenderPatternProps {
   render: (
       state: PropRenderPatternState
   ) => JSX.Element;

}



class PropRenderPattern extends React.Component<PropRenderPatternProps,
PropRenderPatternState> {

    constructor(props: PropRenderPatternProps) {

        super(props);
        console.log("HERE ---->>CONSTRUCTOR <<<<<-----");
        console.log(props);

        this.state = {
            x: 0,
            y: 0,
        }
    }


    handleMouseTrackPosition =
        (event: MouseEvent<HTMLDivElement>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
        //console.log(event.clientX);
        //console.log(event.clientY);
    }


    render() {
        return (
        //  HERE in props.render IS A RENDER PROPS DONT LE VALUE IS A FUNCTION .render(this.state)
        // that COMPONENT PropRenderPattern USING
        // TO RELEGATE A part BEHAVIOR or STATE ( in this CASE (X,Y) state ) MENAGE LOGIC
        // - PART OF UI COMPONENT - THAT
        // YOU WANT TO REUSE EN DIFFERENT PARTS AND COMPONENT ; WITHOUT TO REPEAT THIS
        // LOGIC TO DIFFERENTS COMPONENTS,  YOU CAN RELEGATE IN A COMMONFUNCTION BY RENDER
        //  PROPS - A PROPS DONT LE VALUE IS A FUNCTION - TO SHARE IT
            <div>
                <div style={{color: "cornflowerblue"
                    , fontFamily: "Courier New, Courier, monospace"
                    , fontSize: "20px"
                , backgroundColor: "lightcyan"
                , height: "510px"
                , width: "1050px"
                , margin: "10px"
                    , border: "1px solid black"
                    , padding: "10px"
                    , borderRadius: "10px"
                    , textAlign: "center"
                    , cursor: "crosshair"
                }}
                     onMouseMove={this.handleMouseTrackPosition}>

                    {this.props.render(this.state)}
                </div>


            </div>

            // TODO OTHER UTILISATION OF RENDER PROPS - 渲染属性  - RENDERIZAR OBJETOS

        );

    }

}
export default PropRenderPattern;