import { useState } from "react"
import Comments from "../activitySubSection/Comments"
import Images from "../activitySubSection/Images"
import Posts from "../activitySubSection/Posts"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"
import styles from "./Activity.module.scss"
import Header from "../../atoms/Header/Header"
import modalEvent from "../../utils/event"

export default function Activity(){
    const create=()=>{modalEvent.emit("activeModal", "post");}
    const [active,setActive]=useState("comments");
    const left=[{type:"text",props:{children:"Activity"}}];
    const right=[{type:Button,props:{type:"secondary",handleClick:create,children:"Create a post"}},{type:Button,props:{type:"icon",children:<Icon icon="edit"/>}}]
    
    
    return(
        <>
            <div id={styles.activity}>
                
                <Header leftContent={left} rightContent={right} paddingLR="zero"/>
                <div id={styles.activities}>
                    <Button type={active==="posts" ? "primary":"secondary"} id="postButton"  handleClick={()=>setActive("posts")}>Posts</Button>
                    <Button type={active==="comments" ? "primary":"secondary"} id="postButton"  handleClick={()=>setActive("comments")}>Comments</Button>
                    <Button type={active==="images" ? "primary":"secondary"} id="postButton"  handleClick={()=>setActive("images")}>Images</Button>
                </div>
                {active==="comments" && <Comments/>}  
                {active==="images" && <Images/>}
                {active==="posts" && <Posts/>}
                {console.log(active)}
                

               

                
                
                    
                    
                
                
                

            </div>
        </>
    )
}