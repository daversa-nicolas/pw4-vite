import PropRenderPattern from "./PropRenderPattern.tsx";
import PropRenderTheLabel from "./PropRenderTheLabel.tsx";

// commonrelegate is the composabnt trhat implement prop
// proppatterrender  so to calling in routing directly
export default function CommonRelegate() {

    return (
        <div>
            <PropRenderPattern render={

                ({ x, y }) => (
                    <div>
                        MOUSE IS IN THIS POSITION OF SQUARE:  ({ x } , { y })
                    </div>
                )}/>


            <PropRenderTheLabel render = {

                ( {nameVimana})=>
                    (<label>THIS IS THE NAME YOU CLIKED: ({nameVimana})</label>)

            }/>
        </div>

    );


}


