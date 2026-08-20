import React from 'react';

interface ClasseStateProps {
    result: number;
}

interface ClasseStateState {
    count: number;
}

class ClasseState extends React.Component<ClasseStateProps, ClasseStateState> {

    constructor(props: ClasseStateProps) {
        super(props);
        this.state=({
            count: 2
        })
    }

    addMultiple = () => {
        this.setState(
            prevState => {
                return{
                    count: prevState.count * 2
                };
            }
        );
    }

    render() {
        return (
            <div>
                <h1>Classe State WORK !
                </h1>
                <button onClick={this.addMultiple}>STATE DANS CLASSE CALLIN FROM FUNCTION</button>
            </div>)
    }

}

export default ClasseState;