/* eslint-disable react/prop-types */
import modalEvent from "../../utils/Event";
export default function Header({heading}){
    function quit(){
        modalEvent.emit("activeModal","");
    }
    return(
        <>
            <div id="headerWrapper">
                <div id="header">{heading}</div>
                <button id="quit">
                    <i className="material-icons" onClick={quit}>close</i>
                </button>
            </div>
        </>
    )
}