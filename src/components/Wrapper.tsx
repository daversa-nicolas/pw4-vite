// PADDIMG MICRO COMPONENT
import {Component} from "react";


export interface WrapperProps {
    children: React.ReactNode;
}


interface WrapperStates {
    bgColor: string;
    margin: string;
    padding: string;
    fontFamily: string;
}

/*In a class component, has two generic types: `Component`
```
Component<Props, State>
```
*/

class Wrapper extends Component<WrapperProps,WrapperStates> {

    constructor(props: WrapperProps) {

        super(props);

        this.state = {

                bgColor: "lightblue",
                margin: "15px",
                padding: "1px",
                fontFamily: "Courier New, Courier, monospace"

        }
    }

    render() {
        const {children} = this.props;
        const {bgColor, margin, padding, fontFamily}=this.state
            return (
                <div style={{
                    backgroundColor: bgColor,
                    margin: margin,
                    padding: padding,
                    fontFamily: fontFamily
                }}>
                    {children}
                </div>
            )
    }

}

export default Wrapper;