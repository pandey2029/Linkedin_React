import Icon from "../../atoms/icons/Icon"
import styles from "./skill.module.scss"

export default function SkillFooter({handleClick,hide}){

    return(
        <div className={styles.skillsFooter} onClick={handleClick}>
            {hide ? "Show all skills" : "Hide Skills"}
            <Icon id={styles.option} icon='arrow_forward' />
        </div>
    )
}