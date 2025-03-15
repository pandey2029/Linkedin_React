
import Header from "../../atoms/Header/Header"
import Para from "../../atoms/para/Para"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"

import styles from "./About.module.scss"
import flexStyles from "../../styles/flexStyle.module.scss"
import modalEvent from "../../utils/Event"
import { useEffect, useState } from "react"

export default function About(){
    const [aboutData, setAboutData] = useState(() => {
        const data = localStorage.getItem("aboutData");
        return data ? JSON.parse(data) : {};
    });
    useEffect(() => {
        const addAboutData=(e)=>{
            setAboutData(e);
        }
        modalEvent.on("addAboutData", addAboutData)
        return () => {
            modalEvent.off("addAboutData", addAboutData)
        }
    }, [])

    const left=[{type:"text",props:{children:"About"}}]
    const right=[{id:"editAbtBtn",type:Button,props:{type:"icon",handleClick:addModal,children:<Icon icon="edit"/>}}]
    const skillHeaderleft=[{type:Icon,props:{icon:"diamond"}},{type:"text",props:{children:"Top Skills"}}];
    const SkillsHeaderRight=[{type:Icon,props:{icon:"arrow_forward"}}];
    
    function addModal(){
        
        modalEvent.emit("activeModal","about")
    }
    let topSkillList=aboutData.skillList || [];
    return(
        
        <div id="about" className={styles.about}>
            <Header leftContent={left} rightContent={right} paddingLR="zero" />
            <Para
                id="aboutText"
                className={styles.aboutText}
                text={aboutData.aboutContent}
            />
            <div id="aboutSkills" className={styles.aboutSkills}>
                <Header leftContent={skillHeaderleft} rightContent={SkillsHeaderRight} contentSize="s" />
                <div className={`${styles.topSkillsContainer} ${flexStyles["flexRow-gap-s-left"]}`}>
                    {topSkillList.map((skill, index) => (
                    <div className={styles.topSkill} key={index}>
                        {skill} {index !== topSkillList.length - 1 ? "•" : ""}
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

