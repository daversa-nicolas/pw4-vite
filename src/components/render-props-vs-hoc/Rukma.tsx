import React from 'react';


export interface RukmaProps {
    name: string;
}



class Rukma extends React.Component<RukmaProps> {
    constructor(props: RukmaProps) {
        super(props);
        this.state={
            name: "RUKMA_NAME",
        }
    }


    render() {
        const { name } = this.props;

        return (
            <div>
                <button onClick={()=>addName(name)}>THIS IS RUKMA BUTTON</button>
            </div>
        );
    }
}

export default Rukma;