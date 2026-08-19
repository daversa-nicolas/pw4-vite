import React from 'react';


export interface PushpakaProps {

    // IN PROPS   LA FUNCTION EXPORT  VERS PARENT DEFINE IN PARENT
    // declaring this function
    // la valeur vient de name et stockée en this.state, donc name \
    // est un state
    addName: (name: string) => void;
}
export interface PushpakaState {
    name: string;
}

class Pushpaka extends React.Component<PushpakaProps,PushpakaState> {
    constructor(props: PushpakaProps) {
        super(props);
        this.state = {
            name: "PUSHPAKA_NAME",
        }
    }


    render() {
        const { name } = this.state;
        const { addName } = this.props;

        return (
            <div>
                <button onClick={()=>addName(name)}>THIS IS PUSHPAKA BUTTON</button>
            </div>
        );
    }
}

export default Pushpaka;