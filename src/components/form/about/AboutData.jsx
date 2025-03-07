import TextareaLabel from "../../elements/textareaWithLabel/TextareaLabel";
import Header from "../../../atoms/Header/Header";
import Footer from "../../formBuilder/Footer"
import "../../formBuilder/Form.css";
import SkillAdd from "../skillAdd/SkillAdd";

import Icon from "../../../atoms/icons/Icon";
import Button from "../../../atoms/Button/Button";

export default function AboutData(){
    const field={
        id:"content",
        label:"You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.",
        
    }
    const attributes={
        name:field.id,
        placeholder:"Add about yourself here"
    }
    // const left="Edit About";
    const left=[{type:"text",props:{children:"Edit About"}},]
    const right=[{id:"quit",type:Button,props:{type:"primary",children:<Icon icon="close"/>}}]
    // const right=(<button id="quit"><i className="material-icons">close</i></button>);
    return(
        
            <div id="modal">
                <div id="tab">
                    <Header leftContent={left} rightContent={right} border="bottom"/>
                    <TextareaLabel field={field} attributes={attributes}/>
                    <SkillAdd/>

                    <Footer/>
                </div>
            </div>


        
    )
}