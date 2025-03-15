/* eslint-disable react/prop-types */
import symbol1 from "../images/symbol1.svg"
import symbol2 from "../images/symbol2.svg"
import symbol3 from "../images/symbol3.svg"
import postPhoto2 from "../images/postPhoto2.jpeg"
import Image from "../../../atoms/img/Image"
export default function PostBody({postContent}){
    return(
        <>
            <div className="contentWrapper">
                <div className="postContent">
                    {postContent}                            
                </div>
                <Image className="contentPhoto" src={postPhoto2}/>
            </div>
            <div className="contentFooter">
                <div className="reactions">
                    <Image className="reactionSymbol" src={symbol1}/>
                    <Image className="reactionSymbol" src={symbol2}/>
                    <Image className="reactionSymbol" src={symbol3}/>
                    <div className="reactionNumber">107</div>
                </div>
                <div className="commentRepost">
                    10 comments • 2 reposts
                </div>
            </div>
        
        </>
    )
}