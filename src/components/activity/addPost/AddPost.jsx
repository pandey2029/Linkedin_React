import { useRef, useState } from "react";
import Image from "../../../atoms/img/Image";
import TextArea from "../../../atoms/textArea/Textarea";
import Button from "../../../atoms/Button";
import Icon from "../../../atoms/icons/Icon";
import styles  from "./addPost.module.scss";
import Header from "../../../atoms/Header/Header";
import Input from "../../../atoms/input/Input";
import modalEvent from "../../../utils/event";

export default function AddPost(){
    const [postContent,setPostContent]=useState("");
    const [displayPhoto,setDisplayPhoto]=useState("");
    const left=[{type:"text",props:{children:"Create Post"}}]
    const right=[{type:Icon,props:{id:styles.quit,icon:"close",handleClick:close}}];
    const leftFooter=[{id:styles.add,type:Icon,props:{icon:"add",handleClick:addImage}}];
    const rightFooter=[{id:styles.save,type:Button,props:{type:"primary",children:"Create Post",handleClick:save}}];
    const inputRef = useRef(null);

    const handleChange=(e)=>{
        setPostContent(e.target.value)
    }
    function close(){
        modalEvent.emit("activeModal","");
    }
    function addImage(){
        inputRef.current.click();
    }
    function imageChange(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            setDisplayPhoto(e.target.result);
            
        };
        reader.readAsDataURL(file);
    }
    function save(){
        
        const existingData = JSON.parse(localStorage.getItem("postData")) || [];
        existingData.push({postImage:displayPhoto,postContent:postContent});
        localStorage.setItem("postData", JSON.stringify(existingData));
        modalEvent.emit("addPost",{postImage:displayPhoto,postContent:postContent});
        setDisplayPhoto("");
        setPostContent("");
        modalEvent.emit("activeModal", "");
    }

    return(
        <div id={styles.modal}>
            <div id={styles.tab}>
                <Header leftContent={left} rightContent={right}/>
                    {displayPhoto && <Image id={styles.imageDisplay} src={displayPhoto}/>}
                    <Input attributes={{type:"file",id:styles.imageInput,ref:inputRef,onChange:imageChange} }/>
                    <TextArea value={postContent} attributes={{id:styles.postContentInput,placeholder:"What do you want to talk about?"}} eventHandler={{onChange:handleChange}}/>
                <Header leftContent={leftFooter} rightContent={rightFooter}/>
            </div>
        </div>
    )
}