/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import styles from "./Intro.module.scss"
import flexStyles from "../../styles/flexStyle.module.scss"

import backgroundImage from "../images/backgroundimg.jpg"
import Image from "../../atoms/img/Image";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/icons/Icon";
import modalEvent from "../../utils/Event";
import ExperienceInfo from "./ExperienceInfo";
import Header from "../../atoms/Header/Header";
export default function Intro({handleProfile,profilePhoto,data}){
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
                    { type: "div", props: { id: styles.name, children:`${data.firstName} ${data.lastName}` } },
                    { type: "div", props: { id: styles.headline, children: data.headline } },
                    {
                        type: "div",
                        props: {
                            id: styles.locationContact,
                            children: [
                                { type: "div", props: { id: styles.location, children: `${data.city},${data.country}` } },
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