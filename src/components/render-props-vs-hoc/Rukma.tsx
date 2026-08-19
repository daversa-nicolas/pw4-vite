import React from 'react';

// TODO need export to parent ? see in execution
interface RukmaProps {

    // IN PROPS   LA FUNCTION EXPORT  VERS PARENT DEFINE IN PARENT
    // declaring this function
    // la valeur vient de name et stockée en this.state, donc name \
    // est un state
    addName: (name: string) => void;
}
// Définition de la structure du State pour TypeScript
interface RukmaState {
    name: string;
}

class Rukma extends React.Component<RukmaProps,RukmaState> {
    constructor(props: RukmaProps) {
        super(props);
        this.state={
            name: "RUKMA_NAME",
        }
    }

    render() {
        //addName est une PROPRIETE D un TAGS cause par RENDER PROPS? TODO
        const { addName} = this.props;
        //  name est un STATE qui a stockée Value string
        // "RUKMA_NAME" est stockée dans this.state.
        const { name} = this.state;

        return (
            <div>
                <button onClick={()=>addName(name)}>THIS IS RUKMA BUTTON</button>
            </div>
        );
    }
}

export default Rukma;