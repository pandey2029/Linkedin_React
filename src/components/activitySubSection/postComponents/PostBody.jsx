/* eslint-disable react/prop-types */
import symbol1 from "../../images/symbol1.svg"
import symbol2 from "../../images/symbol2.svg"
import symbol3 from "../../images/symbol3.svg"
import postPhoto2 from "../../images/postPhoto2.jpeg"
import Image from "../../../atoms/img/Image"
import styles from "../../activity/Activity.module.scss"
export default function PostBody({postContent,postPhoto}){
    return(
        <>
            <div className={styles.contentWrapper}>
                <div className={styles.postContent}>
                    {postContent}                            
                </div>
                <Image className={styles.contentPhoto} src={postPhoto} />
            </div>
            <div className={styles.contentFooter}>
                <div className={styles.reactions}>
                    <Image className={styles.reactionSymbol} src={symbol1} />
                    <Image className={styles.reactionSymbol} src={symbol2} />
                    <Image className={styles.reactionSymbol} src={symbol3} />
                    <div className={styles.reactionNumber}>107</div>
                </div>
                <div className={styles.commentRepost}>
                    10 comments • 2 reposts
                </div>
            </div>
        </>
    )
}