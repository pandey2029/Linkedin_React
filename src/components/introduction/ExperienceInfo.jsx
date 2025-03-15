import Image from "../../atoms/img/Image";
import styles from "./Intro.module.scss"
import flexStyles from "../../styles/flexStyle.module.scss"
export default function ExperienceInfo({companyName}){
    return(
        <div className={styles.experience}>
            <Image className={styles.experienceImg} id="experienceCompanyImg" src=""/>
            <div className={styles.experienceName} id="experienceCompanyName">{companyName}</div>
        </div>
    )
}