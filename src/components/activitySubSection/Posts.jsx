import profilePhoto from "../images/profilephoto.jpeg"
import globe from "../images/public.svg"
import postPhoto2 from "../images/postPhoto2.jpeg"
import symbol1 from "../images/symbol1.svg"
import symbol2 from "../images/symbol2.svg"
import symbol3 from "../images/symbol3.svg"
import like from "../images/like.svg"
import comment from "../images/comment.svg"
import repost from "../images/repost.svg"
import send from "../images/send.svg"
import PostHeader from "./postComponents/PostHeader"
import PostBody from "./postComponents/PostBody"
import PostFooter from "./postComponents/PostFooter"
import styles from "../activity/Activity.module.scss"
import { useEffect, useState } from "react"
import modalEvent from "../../utils/event"
export default function Posts(){

    const [post, setpost] = useState(() => {
            const data = localStorage.getItem("postData");
            return data ? JSON.parse(data) : [];
    });
    useEffect(() => {
        const addPostData = (e) => {
            setpost(prev => [...prev, e]);
        };
        modalEvent.on("addPost", addPostData)
        return () => {

            modalEvent.off("addPost", addPostData);
        }
    }, [])
return (<>
<div className="contentDiv" id={styles.posts}>

                        {post.map((post)=>{
                            return(
                                <div className={styles.post}>
                            
                            <PostHeader name="Shubham Pandey" headline="Associate Software Engineering Intern at Tekion | Final year student at The LNMIIT Jaipur"/>
                            <PostBody postContent={post.postContent} postPhoto={post.postImage}/>
                            <PostFooter/>
                            
                            
                        </div>
                            )
                        })}
                       

                       
                    </div>
                    {console.log(post)}

</>)}