/* eslint-disable react/prop-types */
import flexStyles from "../../styles/flexStyle.module.scss"
import styles from "./Experience.module.scss"
export default function Role({role,duration,location,skills}){
    return(
        
        <div className={`${styles.experienceDetail} ${flexStyles['.flexColumn-gap-s-left']}`}>
            <div className={styles.role}>{role}</div>
            <div className={styles.duration}>{duration}</div>
            <div className={styles.location}>{location}</div>
            <div className={styles.roleSkills}>{skills}</div>
        </div>
        
    )
}