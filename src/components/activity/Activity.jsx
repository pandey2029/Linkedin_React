import { useState } from "react"
import Comments from "../activitySubSection/Comments"
import Images from "../activitySubSection/Images"
import Posts from "../activitySubSection/Posts"
import "./Activity.css"
export default function Activity(){
    const [active,setActive]=useState("comments");

    
    
    return(
        <>
            <div id="activity">
                <div id="activityHeader" className="sectionHeader">
                    <div id="activityHeaderLeft">
                        <h2>Activity</h2>
                        <div id="followers">695 followers</div>
                    </div>
                    <div id="activityHeaderRight">
                        <div id="createPost" className="paddingClass">Create Post</div>
                        <span className="material-icons edit" id="aboutBtn">edit</span>
                    </div>
                    
                </div>
                <div id="activities">
                    <button className={`activityButton ${active==="posts" ? "activityButtonActive":""}`} id="postButton"  onClick={()=>setActive("posts")}>Posts</button>
                    <button className={`activityButton ${active==="comments" ? "activityButtonActive":""}`} id="postButton"  onClick={()=>setActive("comments")}>Comments</button>
                    <button className={`activityButton ${active==="images" ? "activityButtonActive":""}`} id="postButton"  onClick={()=>setActive("images")}>Images</button>
                </div>
                {active==="comments" && <Comments/>}  
                {active==="images" && <Images/>}
                {active==="posts" && <Posts/>}
                {console.log(active)}
                

                {/* so that function not called immediately */}

                
                
                    
                    
                
                
                

            </div>
        </>
    )
}