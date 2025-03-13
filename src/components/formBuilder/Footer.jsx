import styles from "./Form.module.scss"
export default function Footer({onClick=()=>{}}){
    return(
        <>
            <div id={styles.footer}>
                <button id={styles.saveExp} type="submit" onClick={onClick}>save</button>
            </div>
        </>
    )
}