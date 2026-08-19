import React from 'react';


export interface PushpakaProps {
    name: string;
}

class Pushpaka extends React.Component<PushpakaProps> {
    constructor(props: PushpakaProps) {
        super(props);
        this.state = {
            name: "PUSHPAKA_NAME",
        }
    }


    render() {
        const { name } = this.props;

        return (
            <div>
                <button onClick={()=>this.addName(name)}>THIS IS PUSHPAKA BUTTON</button>
            </div>
        );
    }
}

export default Pushpaka;