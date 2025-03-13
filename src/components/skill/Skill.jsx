import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"
import styles from "./Skill.module.scss"
import modalEvent from "../../utils/Event"
export default function Skill({data}){
    const left=[{type:"text",props:{children:"Skills"}}]
    const right=[{id:"addEduBtn",type:Button,props:{type:"icon",handleClick:addModal,children:<Icon icon="add"/>}},{id:"editEduBtn",type:Button,props:{type:"icon",children:<Icon icon="edit"/>}}]
    
    function addModal(){
        
        modalEvent.emit("activeModal","skill")
    }      
    return(
        
          
        <div id={styles.skills} style={{ marginTop: "0", marginBottom: "0" }}>
            <Header leftContent={left} rightContent={right} />
            <div id={styles.skillContainer}>
                {data.map((skill, index) => (
                    <div key={index} className={styles.skill}>{skill}</div>
                ))}
            </div>
            <div className={styles.skillsFooter}>
                Show all skills
                <Icon id={styles.option} icon='arrow_forward' />
            </div>
        </div>


            
        
    )
}