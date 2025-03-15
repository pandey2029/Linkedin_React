import Footer from "../../formBuilder/Footer";
import Header from "../../../atoms/Header/Header";
import SkillAdd from "../skillAdd/SkillAdd";

export default function SkillData(){
    const left="Add Skill";
    const right=(<button id="quit"><i className="material-icons">close</i></button>);
    return(
        <div id="modal">
            <div id="tab">
                 <Header leftContent={left} rightContent={right}/>
                
                <SkillAdd/>
        
                <Footer/>
            </div>
        </div>
    )
}