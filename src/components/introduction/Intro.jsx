/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import styles from "./Intro.module.scss"
import flexStyles from "../../styles/flexStyle.module.scss"
import defaultImage from "../images/defaultPhoto.png"
import backgroundImage from "../images/backgroundimg.jpg"
import Image from "../../atoms/img/Image";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/icons/Icon";
import modalEvent from "../../utils/Event";
import ExperienceInfo from "./ExperienceInfo";
import Header from "../../atoms/Header/Header";
import { useEffect, useState } from "react";
export default function Intro({handleProfile}){
    const [intro, setIntro] = useState(() => {
        const data = localStorage.getItem("introData");
        return data ? JSON.parse(data) : {};
    });
    const [profilePhoto,setProfilePhoto]=useState(() => {
        return JSON.parse(localStorage.getItem("profilePhoto")) || defaultImage;
    })
    useEffect(()=>{
        const addIntroData = (e) => {
            setIntro(e);   
        };
        const addProfilePhotoData=(e)=>{
            setProfilePhoto(e);
        }
        modalEvent.on("addIntro",addIntroData)
        modalEvent.on("addProfilePhoto",addProfilePhotoData);
        return ()=>{
            
            modalEvent.off("addIntro",addIntroData); 
            modalEvent.off("addProfilePhoto",addProfilePhotoData);
               
        }
    },[])
    
    function addModal(){
        
        modalEvent.emit("activeModal","intro")
    }
    const companyList=["Tekion","LNMIIT"];
    const left = [
        {
            type: "div",
            props: {
                id: styles.introLeft,
                className: flexStyles["flexColumn-gap-s-left"],
                children: [
                    { type: "div", props: { id: styles.name, children:`${intro.firstName} ${intro.lastName}` } },
                    { type: "div", props: { id: styles.headline, children: intro.headline } },
                    {
                        type: "div",
                        props: {
                            id: styles.locationContact,
                            children: [
                                { type: "div", props: { id: styles.location, children: `${intro.city},${intro.country}` } },
                                { type: "div", props: { id: styles.contact, children: "Contact Info" } }
                            ]
                        }
                    },
                    { type: "div", props: { id: styles.connections, children: "500+ connections" } }
                ]
            }
        }
    ];

    const right = companyList.map((company, index) => ({
        id: `company-${index}`,
        type: ExperienceInfo,
        props: { companyName: company }
    }));
    function addModal(modalName){
        
        modalEvent.emit("activeModal",modalName);
    }
    return(
        <div id={styles.introduction}>
            <Image id={styles.backgroundImg} src={backgroundImage} />
            <Image id={styles.profileImg} src={profilePhoto} handleClick={()=>addModal("profilePhoto")}/>
            
            <div id={styles.editIntroContainer}>
                <Button type={"icon"} handleClick={()=>addModal("intro")} children={<Icon icon="edit"/>}/>
            </div>
            
            
            <Header idRight={styles.introRight} leftContent={left} rightContent={right} id={styles.intro}  contentSize="xs" />
            
            

            <div id={styles.aboutButtons}>
                <Button type="primary">Open to</Button>
                <Button type="secondary" handleClick={handleProfile}>Add Profile Section</Button>
                <Button type="secondary">Enhance Profile</Button>
                <Button type="tertiary">Resources</Button>
            </div>
        </div>
    )
}