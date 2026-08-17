import React from "react";
import bricsDominanceUnit from "../assets/brics-dominance-unit.jpg";
import vimanasAncientRetroZone51 from "../assets/vimanas-AncientRetroZone51.png";
import vimanaRetroingenieringZoneS4 from "../assets/retroingeniering-zoneS4.jpg";

//import {Link} from "react-router-dom";


// EXPORT TO PARENT
export interface ImageHangarS {
    colorProps: string;
    nameImage: string;
    nameImageTechno: string;
}

function newTab(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
}


const ImagesHangar = (props: ImageHangarS) =>{

    let fieldsinternal: React.ReactNode;

    if (props.nameImage=="brics-empire-gold-money-unit") {
        fieldsinternal = (
            <div>
                <div>
                    <img style={{
                        padding: "50px",
                        height: "550px",
                        width: "500px",
                        backgroundColor: props.colorProps}}
                         src={bricsDominanceUnit}
                         alt="" />
                    <div>{"THIS IS THE OUTPUT FROM PARENT PROPS:" + props.nameImage}</div>

                </div>
                <div style = {{fontSize: 15}}>
                    <h4>Blockchain – <div> The Unit BRICS+ money </div>,
                        multilatéral oriental extraterritorial golden-backed single money à
                        dominante Renminbi Yuán à débacle dollar-sournois deux poids deux
                        mesures-
                        ,annihilation sanctions wash. et pitoyable déclin arnaque
                        nasa-pseudo-empire en pleine chute-, blamée, capitulée et dominée par la supérieure technologie des
                        ancients antigravity par la majorité de la planète
                        plurimillénaire universel éternel Empire BRISC+
                        <div>
                            L'or physique est l'arbitre impartiel et apolitique international de la richesse d'
                            un pays. Il garantit la monnaie par un
                            actif tangible. La prochaine étape, déjà effectuée en The Unit BRICS+ adossée à l'
                            or, consiste en une monnaie de
                            réserve multilatérale entre ces parties (en commençant par
                            les <div style={{fontStyle:"bold", color:"grey",
                            textDecorationLine:"underline"}} onClick ={()=> newTab("https://www.youtube.com/watch?v=FFTCMfW32VA")}>

                            BRICS + </div> ), annihilant toute transaction en dollar-frustré.
                            ---
                            International Monetary Economics, Michael Angelo Heilperin (Swiss University)
                        </div>
                    </h4>
                </div>
            </div>
        )
    }else {
        fieldsinternal = (
            <div>
                <img style={{
                    padding: "50px",
                    height: "350px",
                    width: "300px",
                    backgroundColor: props.colorProps}}
                     src={vimanasAncientRetroZone51}
                     alt="" />
                <img style={{
                    padding: "50px",
                    height: "350px",
                    width: "300px",
                    backgroundColor: props.colorProps}}
                     src={vimanaRetroingenieringZoneS4}
                     alt="" />
                <div>{"THIS IS THE OUTPUT FROM PARENT PROPS:" + props.nameImage}</div>
                <div>"SECOND from imported asset IMAGE FOUND"</div>
                <div>  <a href="https://www.youtube.com/watch?v=NOPtjD80r-s" rel="noreferrer">
                    黑龙大学 - Université du Heilongjiang du fleuve
                    dragon noir
                </a> applications de rétroingénierie à technologie supérieure et histoire
                    des réels et anciens <a href="https://www.youtube.com/watch?v=Svn1gHu2pRU" rel="noreferrer">
                        VIMANAS</a> antigravitationnels échangée
                dans les complexes industrielles (Mohenjo-Daro – 7622 av.
                    l’Hégira, Pyramides) qui cause la troisième révolution industrielle du
                    numérique (Huawei Device, Bell, Apple, Samsung, Lookheed Martin
                    aircrafts antigravitationals et invisibles)-(Bob Lazar - E. Musk)
                    ---
                    <a href="https://www.youtube.com/watch?v=dCyv8oEsgdQ" rel="noreferrer">
                        https://www.youtube.com/watch?v=dCyv8oEsgdQ
                    </a>

                </div>
            </div>
        )
    }

    return (
        <div>{fieldsinternal}</div>
    );

}
export default ImagesHangar;