import { useEffect, useState } from "react";
import styles from "../activity/Activity.module.scss"
import Comment from "./Comment";
import axios from "axios";
import Icon from "../../atoms/icons/Icon";


export default function Comments(){
  const [comment, setComment] = useState([]);
  useEffect(()=>{
      axios.get("https://apigenerator.dronahq.com/api/Znu4MaHf/commentData")
          .then(response=>setComment(response.data))
          .catch(error=>console.error("Data can't be fetched",error))
  },[])
return(
<>
      <div className={styles.contentDiv} id={styles.comments}>

        {comment.map((data)=>{
          return <Comment data={data}/>
        })}


        <div id={styles.commentsFooter}>
          Show all Comments
          <Icon icon="arrow_forward"/>
        </div>
      </div>
    </>
)}