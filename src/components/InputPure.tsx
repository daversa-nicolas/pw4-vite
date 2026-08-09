import react from 'react';

export interface InputProps {
    name: string;
}



class InputPure extends react.PureComponent<InputProps>{

    constructor(props: InputProps) {
        super(props);
        console.log("HERE ---->>CONSTRUCTOR PURE<<<<<-----");
    }

    render(){
        const {name} = this.props;
    console.log("HERE ---->>RENDER CHILDREN PURE<<<<<----- THE NAME ACTUAL IS :  " + name );

        return(

            <div>CHILDREN LABEL INPUT NAME - NO STATES CHANGES :
                <label>"THIS IS THE OUTPUT OF CHILDREN PURE : "+{name}</label>
            </div>

        )

    }

}

export default InputPure;