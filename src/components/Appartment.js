import { useState } from "react"
import "./Appartment.css"
import AppartmentRoom from "./AppartmentRoom";
import chaiseDeBureau from "../assets/level1/chaise-de-bureau.png";
import mirroir from "../assets/level1/miroir.png";
import nintendoSwitch from "../assets/level1/nintendo-switch.png";
import oreiller from "../assets/level1/oreiller.png";
import tulipe from "../assets/level1/tulipe.png";

function Appartment() {
    const [answer, setAnswer] = useState("");

    const submitAnswer = e => {
        e.preventDefault();
          
    };

    return (
        <div className="Appartment">
            <div className="appartmentRow">
                <AppartmentRoom
                    borderLeftStyle="solid"
                    borderRightStyle="solid"
                    borderTopStyle="solid"
                    borderBottomStyle="solid"
                    width="190px"
                    height="90px"
                    objectIcon={mirroir}
                    animationDelay="12000"
                    objectPositionTop="10%"
                    objectPositionLeft="40%"
                    objectWidth="20%"
                    objectHeight="auto"
                />
                <AppartmentRoom
                    width="140px"
                    height="90px"
                    borderLeftStyle="transparent"
                    objectIcon={oreiller}
                    animationDelay="9000"
                    objectPositionTop="10%"
                    objectPositionLeft="40%"
                    objectWidth="30%"
                    objectHeight="auto"
                >
                    <div className="firstIndication">1</div>
                </AppartmentRoom>
            </div>
            <div className="appartmentRow">
                <div>
                    <div className="appartmentRow">
                        <AppartmentRoom
                            width="49px"
                            height="45px"
                            borderTopStyle="transparent"
                            borderLeftStyle="transparent"
                            borderRightStyle="transparent"
                        />
                        <AppartmentRoom
                            width="145px"
                            height="45px"
                            borderLeftStyle="transparent"
                            borderRightStyle="transparent"
                            borderTopStyle="transparent"
                            borderBottomStyle="transparent"
                        />
                    </div>

                    <div className="appartmentRow">
                        <AppartmentRoom
                            width="45px"
                            height="45px"
                            borderTopStyle="transparent"
                            borderLeftStyle="transparent"
                            borderRightStyle="transparent"
                            borderBottomStyle="transparent"
                        />
                        <AppartmentRoom
                            width="145px"
                            height="45px"
                            borderRightStyle="transparent"
                            borderTopStyle="transparent"
                            borderBottomStyle="transparent"
                        />
                    </div>
                </div>
                <AppartmentRoom
                    width="140px"
                    height="90px"
                    borderTopStyle="transparent"
                    objectIcon={chaiseDeBureau}
                    animationDelay="3000"
                    objectPositionTop="10%"
                    objectPositionLeft="40%"
                    objectWidth="30%"
                    objectHeight="auto"
                />
            </div>

            <div className="appartmentRow">
                <AppartmentRoom
                    width="45px"
                    height="45px"
                    borderTopStyle="transparent"
                    borderLeftStyle="transparent"
                    borderRightStyle="transparent"
                    borderBottomStyle="transparent"
                />
                <AppartmentRoom
                    width="145px"
                    height="45px"
                    borderTopStyle="transparent"
                    borderRightStyle="transparent"
                    borderBottomStyle="transparent"
                />
                <AppartmentRoom
                    width="140px"
                    height="45px"
                    borderTopStyle="transparent"
                    borderBottomStyle="transparent"
                />
            </div>

            <div className="appartmentRow">
                <AppartmentRoom
                    width="46px"
                    height="145px"
                    borderTopStyle="transparent"
                    borderLeftStyle="transparent"
                    borderRightStyle="transparent"
                    borderBottomStyle="transparent"
                />
                <AppartmentRoom
                    width="145px"
                    height="145px"
                    borderTopStyle="transparent"
                    borderRightStyle="transparent"
                    objectIcon={tulipe}
                    animationDelay="0"
                    objectPositionTop="60%"
                    objectPositionLeft="20%"
                    objectWidth="25%"
                    objectHeight="auto"
                >
                    <div className="tableSalon"></div>
                </AppartmentRoom>
                <AppartmentRoom
                    width="144px"
                    height="145px"
                    borderTopStyle="transparent"
                    borderLeftStyle="transparent"
                    objectIcon={nintendoSwitch}
                    animationDelay="6000"
                    objectPositionTop="55%"
                    objectPositionLeft="70%"
                    objectWidth="25%"
                    objectHeight="auto"
                >
                    <div className="planTravail"></div>
                </AppartmentRoom>
            </div>
            <form className="answerForm" 
            onSubmit={submitAnswer}>
                <input
                    className="answerInput"
                    value={answer}
                    onChange={e => { setAnswer(e.target.value); }} />
                <button className="answerButton">
                    ok
                </button>
            </form>


        </div>
    );
}

export default Appartment