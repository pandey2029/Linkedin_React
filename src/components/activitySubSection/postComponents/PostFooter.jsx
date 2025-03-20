import like from "../../images/like.svg"
import comment from "../../images/comment.svg"
import repost from "../../images/repost.svg"
import send from "../../images/send.svg"
import SymbolComponent from "./SymbolComponent";
import styles from "../../activity/Activity.module.scss"
export default function PostFooter(){
    const symbol=[[like,"Like"],[comment,"Comment"],[repost,"Repost"],[send,"Send"]];
    return(
        <div className={styles.postFooter}>
            {symbol.map((sym)=>(<SymbolComponent src={sym[0]} text={sym[1]}/>))}
                                      
                                        
        </div>
    )
}