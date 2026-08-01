import {Component} from "react"
import ImagesHangar, { type ImageHangarS } from "./ImagesHangar";

interface HomeState {
    imageHangar1: ImageHangarS;
}


class Home extends Component <Record<string, never>, HomeState>{



    constructor(props: Record<string, never>) {
        super(props);

        this.state = {
            imageHangar1 : {
                colorProps: "red",
                nameImage: "brics-empire-gold-money-unit"
            }
        }

    }
    /*TODO hyper link to The Unit Tag*/

    render(){
        const {imageHangar1} = this.state;
        return(

            <div>
                <ImagesHangar colorProps={imageHangar1.colorProps} nameImage={imageHangar1.nameImage}/>


            </div>
        )
    }
}

export default Home;