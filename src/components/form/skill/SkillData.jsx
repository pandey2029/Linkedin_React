import Footer from "../../formBuilder/Footer";
import Header from "../../../atoms/Header/Header";
import SkillAdd from "../skillAdd/SkillAdd";
import FormHeader from "../../formBuilder/FormHeader";
import styles from "../../formBuilder/Form.module.scss"
import skillStyles from "./SkillData.module.scss"
import { useEffect, useState } from "react";
import modalEvent from "../../../utils/event";
export default function SkillData(){
    const skillData=JSON.parse(localStorage.getItem("skillData")) || []
    const [skillList,setSkillList]=useState(skillData);

    function submit(){
        modalEvent.emit("addSkillData",skillList)
        
        localStorage.setItem("skillData", JSON.stringify(skillList));
        modalEvent.emit("activeModal","");
    }
    
    
    return(
        <div id={styles.modal}>
            <div id={styles.tab}>
                <FormHeader heading={"Add Skill"}/>
                <div className={skillStyles.wrapper}>
                    <SkillAdd skillList={skillList} setSkillList={setSkillList}/>
                </div>
                <Footer onClick={submit}/>
            </div>
        </div>
    )
}