import React from 'react';

// Définition de la structure du State
interface PropRenderTheLabelState {
    nameVimana: string;
}

interface PropRenderTheLabelProps {
    render: (data: {
                 nameVimana: string
                  addName: (name: string) => void;
             }) => React.JSX.Element;
}
// PARENT (1) COMMONRELEGATE
class PropRenderTheLabel extends React.Component <PropRenderTheLabelProps, PropRenderTheLabelState>{

// initialisation need to have empty value
    state: PropRenderTheLabelState = {
        nameVimana: ""
    };

// WITH DUMMY ARGUMENT FONTION
    addName=(nameDummy: string)=>{
        console.log( "PASSING IN THIS FUNCTION THE VALUE : "+nameDummy);
        if (nameDummy.startsWith("YOU CLICKED ON : ")) {
            return;
        }else {
            this.setState({
                nameVimana: "YOU CLIKED ON : " + nameDummy
            })
        }
    }


    render() {
        const {nameVimana} = this.state;
        return (
            <div style={{color: "red"}}>
                {/*  On envoie aussi this.addName au parent (1)*/}
                {this.props.render({ nameVimana, addName: this.addName })}
            </div>
        );
    }
}

export default PropRenderTheLabel;