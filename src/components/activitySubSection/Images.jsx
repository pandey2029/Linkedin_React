import styles from "../activity/Activity.module.scss"
export default function Images() {
    return (
        <>
            <div className={styles.contentDiv} id={styles.images}>
                <div className={styles.singleImage} id={styles.image1}></div>
                <div className={styles.multiImage} id={styles.image2}>
                    <strong>+2</strong>
                </div>
                <div className={styles.singleImage} id={styles.image3}></div>
                <div className={styles.singleImage} id={styles.image4}></div>
                <div className={styles.singleImage} id={styles.image5}></div>
                <div className={styles.singleImage} id={styles.image1}></div>
                <div className={styles.singleImage} id={styles.image2}></div>
                <div className={styles.singleImage} id={styles.image3}></div>
                <div className={styles.multiImage} id={styles.image4}>
                    <strong>+1</strong>
                </div>
                <div className={styles.singleImage} id={styles.image5}></div>
                <div className={styles.singleImage} id={styles.image1}></div>
                <div className={styles.singleImage} id={styles.image2}></div>
                <div className={styles.singleImage} id={styles.image3}></div>
                <div className={styles.singleImage} id={styles.image4}></div>
                <div className={styles.singleImage} id={styles.image5}></div>
                <div className={styles.multiImage} id={styles.image1}>
                    <strong>+5</strong>
                </div>
            </div>
        </>)
}