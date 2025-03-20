import { IMAGES } from "../../utils/Constants"
import styles from "../activity/Activity.module.scss"
export default function Images() {
    return (
        <>
            <div className={styles.contentDiv} id={styles.images}>


                {IMAGES.map((data)=>{
                    if(data.data){
                        return <div className={styles.multiImage} id={styles[data.id]}><strong>{data.data}</strong></div>
                    }
                    else{
                        return <div className={styles.singleImage} id={styles[data.id]}></div>
                    }
                   
                })}

               
            </div>
        </>)
}