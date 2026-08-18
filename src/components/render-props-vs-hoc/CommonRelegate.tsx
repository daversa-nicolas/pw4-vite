import PropRenderPattern from "./PropRenderPattern.tsx";


export default function CommonRelegate() {

    return (

        <PropRenderPattern render={

            ({ x, y }) => (
                <div>
                    MOUSE IS IN THIS POSITION OF SQUARE:  ({ x } , { y })
                </div>
            )

        }/>
    )
}



