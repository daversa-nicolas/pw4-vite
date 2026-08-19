import React from 'react';

// Définition de la structure du State
interface PropRenderTheLabelState {
    nameVimana: string;
}

interface PropRenderTheLabelProps {
    render: (data: {
                 nameVimana: string
             }) => React.JSX.Element;
}

class PropRenderTheLabel extends React.Component <PropRenderTheLabelProps, PropRenderTheLabelState>{

// initialisation need to have empty value
    state: PropRenderTheLabelState = {
        nameVimana: ""
    };

// WITH DUMMY ARGUMENT FONTION
    addName=(nameDummy:string)=>{
        console.log(nameDummy);
        this.setState({
            nameVimana: "YOU CLIKED ON : "+ nameDummy
        })
    }


    render() {
        const {nameVimana} = this.state;
        return (
            <div style={{color: "red"}}>
                {this.props.render({nameVimana})}
            </div>
        );
    }
}

export default PropRenderTheLabel;