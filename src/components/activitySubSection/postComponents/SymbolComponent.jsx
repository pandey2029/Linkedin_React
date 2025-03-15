import Image from "../../../atoms/img/Image";
import styles from "../../activity/Activity.module.scss"
export default function SymbolComponent({src,text}){
    return(
        <div className={styles.symbolWrapper}>
            <Image src={src}/>
            {text}
        </div>
    )
}