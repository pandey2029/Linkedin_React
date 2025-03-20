import Image from "../../../atoms/img/Image"
import styles from "../../activity/Activity.module.scss"
import globe from "../../images/public.svg"
export default function PostHeaderContent({name,headline}){
    return(
        <div className={styles.headerLeftContent}>
            <div className={styles.wrapper1}>
                <div className={styles.postName}>{name}</div>
                <div className={styles.relation}>• You</div>
            </div>
            <div className={styles.postAbout}>{headline}</div>
            <div className={styles.wrapper1}>
                <div className={styles.postTime}>1w •</div>
                <Image className={styles.public} src={globe}/>
            </div>


        </div>
    )
}