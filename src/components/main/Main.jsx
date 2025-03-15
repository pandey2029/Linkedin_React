/* eslint-disable no-unused-vars */

import Intro from '../introduction/Intro';
import About from '../about/About';
import Activity from '../activity/Activity';
import ProfileSetup from '../profileSetup/ProfileSetup';
import "./Main.css";
import { useEffect, useState } from 'react';
import ExperienceData from '../form/experience/ExperienceData';
import EducationData from '../form/education/EducationData';
import IntroData from '../form/intro/IntroData';
import Footer from '../footer/Footer';
import Experience from '../experience/Experience';
import Education from '../education/Education';
import Skill from '../skill/Skill';
import Modal from '../modal/Modal';
import modalEvent from '../../utils/Event';
import AboutData from '../form/about/AboutData';
import SkillData from "../form/skill/SkillData"
import AddProfilePhoto from '../addPhoto/AddProfilePhoto';
import defaultImage from "../images/defaultPhoto.png"

export default function Main(){

const [active,setActive]=useState(false);
const activeProfile=()=>{
    setActive(true);
}
const closeProfile=()=>{
    setActive(false);
    
}





const componentMap=new Map();
componentMap.set("education",<EducationData/>)
componentMap.set("experience",<ExperienceData/>)
componentMap.set("intro",<IntroData/>)
componentMap.set("about",<AboutData/>)
componentMap.set("skill",<SkillData/>)
componentMap.set("profilePhoto",<AddProfilePhoto/>)
componentMap.set("","")
const [activeModal,setActiveModal]=useState("")







   
useEffect(()=>{
    const handleModal=(e)=>{
        setActiveModal(e.detail)
        console.log(e.detail);
    } 
    modalEvent.addEventListener("activeModal",handleModal);

    return ()=>{
        modalEvent.removeEventListener("activeModal",handleModal);
    }

    
},[])








    return(
            <>
            <main>
                <Intro handleProfile={activeProfile}/>
                {active && <ProfileSetup quit={closeProfile}/>}
                <About/>
                <Activity/>
                {/* <Education data={education}/> */}
                <Education/>
                <Skill/>
                
                {/* <EducationData/> */}
                {/* <ExperienceData/> */}
                {/* <IntroData/> */}
                <Experience/>
                <Modal component={componentMap.get(activeModal)}/>
               
                
                

            </main>
            <Footer/>
            </>
        
    )
}


//custom hook for usetate and call it for all
//formdata and setformdata in customhook