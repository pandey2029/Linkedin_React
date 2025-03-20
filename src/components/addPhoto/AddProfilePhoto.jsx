import { Children, useRef, useState } from "react"
import Icon from "../../atoms/icons/Icon"
import Header from "../../atoms/Header/Header";
import Image from "../../atoms/img/Image";
import Input from "../../atoms/input/Input";
import defaultImage from "../images/defaultPhoto.png"
import modalEvent from "../../utils/event";
import styles from "./AddProfilePhoto.module.scss"

export default function AddProfilePhot(){
    let profilePhoto=JSON.parse(localStorage.getItem("profilePhoto")) || defaultImage;;
    const [displayPhoto,setDisplayPhoto]=useState(profilePhoto);
    const inputRef = useRef(null);
    const left=[{type:"text",props:{children:"Profile Photo"}}]
    const right=[{id:styles.quit,type:Icon,props:{icon:"close",handleClick:close}}];
    const leftFooter=[{id:styles.edit,type:Icon,props:{icon:"edit",handleClick:addImage}}];
    const rightFooter=[{id:styles.delete,type:Icon,props:{icon:"delete",handleClick:removeImage}}];
    
    // const [profilePhoto,setProfilePhoto]=useState(() => {
    //     return JSON.parse(localStorage.getItem("profilePhoto")) || defaultImage;
    // })
    function close(){
        modalEvent.emit("activeModal","");
    }
    function addImage(){
        inputRef.current.click();
    }
    function removeImage(){
        //setProfilePhoto(defaultImage);
        modalEvent.emit("addProfilePhoto",defaultImage);
        setDisplayPhoto(defaultImage)
        localStorage.setItem("profilePhoto", JSON.stringify(defaultImage));
    }
    function imageChange(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            //setProfilePhoto(e.target.result);
            modalEvent.emit("addProfilePhoto",e.target.result);
            setDisplayPhoto(e.target.result);
            localStorage.setItem("profilePhoto", JSON.stringify(e.target.result));
        };
        reader.readAsDataURL(file);
    }
    
    return(
        <div id={styles.modal}>
            <div id={styles.tab}>
                <Header leftContent={left} rightContent={right}/>
                    <Image id={styles.imageDisplay} src={displayPhoto}/>
                    <Input attributes={{type:"file",id:styles.imageInput,ref:inputRef,onChange:imageChange} }/>
                <Header leftContent={leftFooter} rightContent={rightFooter}/>
            </div>
        </div>
    )
}