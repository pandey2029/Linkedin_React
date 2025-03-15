import TextareaLabel from "../../../molecule/textareaWithLabel/TextareaLabel";
import Header from "../../../atoms/Header/Header";
import Footer from "../../formBuilder/Footer"
import styles from "../../formBuilder/Form.module.scss"
import SkillAdd from "../skillAdd/SkillAdd";
import aboutStyles from "./AboutData.module.scss"
import Icon from "../../../atoms/icons/Icon";
import Button from "../../../atoms/Button/Button";
import FormHeader from "../../formBuilder/FormHeader";
import { useState } from "react";
import modalEvent from "../../../utils/Event";

export default function AboutData({aboutData}){
    const field={
        id:aboutStyles.content,
        label:"You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.",
        
    }
    const attributes={
        name:field.id,
        placeholder:"Add about yourself here"
    }
    
    const left=[{type:"text",props:{children:"Edit About"}}]
    const right=[{id:styles.quit,type:Button,props:{type:"primary",children:<Icon icon="close"/>}}]
    const [skillList,setSkillList]=useState(aboutData.skillList || []);
    const [aboutContent,setAboutContent]=useState(aboutData.aboutContent || "");
    function handleChange(e){
        setAboutContent(e.target.value);
    }
    function submit(){
        modalEvent.emit("addAboutData",{skillList:skillList,aboutContent:aboutContent})
        
        localStorage.setItem("aboutData", JSON.stringify({skillList:skillList,aboutContent:aboutContent}));
        modalEvent.emit("activeModal","");
    }
    return(
        
            <div id={styles.modal}>
                <div id={styles.tab}>
                   
                    <FormHeader heading={"Edit About"}/>
                    <div className={aboutStyles.wrapper}>
                        <TextareaLabel  field={field} attributes={attributes} eventHandler={{onChange:handleChange}} data={aboutContent}/>
                        <SkillAdd skillList={skillList} setSkillList={setSkillList}/>
                    </div>
                    <Footer onClick={submit}/>
                </div>
            </div>


        
    )
}