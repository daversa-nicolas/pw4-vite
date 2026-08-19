import React from 'react';
import  type {JSX} from "react";

interface PropRenderTheLabelProps {
    render: (
        nameVimana: string
    ) => JSX.Element;
}

class PropRenderTheLabel extends React.Component <PropRenderTheLabelProps>{



// WITH DUMMY ARGUMENT FONTION
    addName=(nameVimana:string)=>{
        console.log(nameVimana);
        this.setState=({
            nameVimana: "YOU CLIKED ON : "+ nameVimana;
        })
    }


    render() {
        const {nameVimana} = this.props;
        return (
            <div style={{color: "red"}} onChange={this.addName}>
                {this.props.render({nameVimana})}
            </div>
        );
    }
}

export default PropRenderTheLabel;