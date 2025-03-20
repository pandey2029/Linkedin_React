import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"
import styles from "./Skill.module.scss"
import modalEvent from "../../utils/event"
import { useEffect, useState } from "react"
import SkillFooter from "./SkillFooter"

export default function Skill(){
    const left=[{type:"text",props:{children:"Skills"}}]
    const right=[{id:"addEduBtn",type:Button,props:{type:"icon",handleClick:addModal,children:<Icon icon="add"/>}},{id:"editEduBtn",type:Button,props:{type:"icon",children:<Icon icon="edit"/>}}]
    const [skillData, setSkillData] = useState(() => {
        const data = localStorage.getItem("skillData");
        return data ? JSON.parse(data) : [];
    });
    const [hide,setHide]=useState(true);
    const toggle=()=>{setHide((pre)=>!pre);}
    useEffect(() => {

        const addSkillData = (e) => {
            setSkillData(e);
        }
       
        modalEvent.on("addSkillData", addSkillData)
        
        return () => {
            modalEvent.off("addSkillData", addSkillData)
        }
    }, [])
    function addModal(){
        
        modalEvent.emit("activeModal","skill")
    }      
    return(
        
          
        <div id={styles.skills} style={{ marginTop: "0", marginBottom: "0" }}>
            <Header leftContent={left} rightContent={right} />
            <div>
                {skillData.slice(0, hide ? Math.min(skillData.length,2) : skillData.length).map((skill, index) => (
                    <div key={index} className={styles.skill}>{skill}</div>
                ))}
            </div>
            {skillData.length>2 && <SkillFooter handleClick={toggle} hide={hide}/>}
        </div>


            
        
    )
}