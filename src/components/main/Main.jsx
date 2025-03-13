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
const [profilePhoto,setProfilePhoto]=useState(() => {
    return JSON.parse(localStorage.getItem("profilePhoto")) || defaultImage;
})
const [skillData, setSkillData] = useState(() => {
    const data = localStorage.getItem("skillData");
    return data ? JSON.parse(data) : [];
});
const [aboutData, setAboutData] = useState(() => {
    const data = localStorage.getItem("aboutData");
    return data ? JSON.parse(data) : {};
});
const [intro, setIntro] = useState(() => {
    const data = localStorage.getItem("introData");
    return data ? JSON.parse(data) : {};
});

const componentMap=new Map();
componentMap.set("education",<EducationData/>)
componentMap.set("experience",<ExperienceData/>)
componentMap.set("intro",<IntroData introData={intro}/>)
componentMap.set("about",<AboutData aboutData={aboutData} setAboutData={setAboutData}/>)
componentMap.set("skill",<SkillData skillData={skillData} setSkillData={setSkillData}/>)
componentMap.set("profilePhoto",<AddProfilePhoto profilePhoto={profilePhoto} setProfilePhoto={setProfilePhoto}/>)
componentMap.set("","")
const [activeModal,setActiveModal]=useState("")

const [education, setEducation] = useState(() => {
    const data = localStorage.getItem("educationData");
    return data ? JSON.parse(data) : [];
  });
const [experience, setExperience] = useState(() => {
    const data = localStorage.getItem("educationData");
    return data ? JSON.parse(data) : [];
});




   
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



useEffect(()=>{
    const addEducationData = (e) => {
        setEducation(prev=>[...prev, e]);   
    };
    modalEvent.on("addEducation",addEducationData)
    return ()=>{
        
        modalEvent.off("addEducation",addEducationData);    
    }
},[])
useEffect(()=>{
    const addExperienceData = (newExperience) => {
       
        setExperience((prev) => {
            const { company, ...detail } = newExperience;

           
            const existingIndex = prev.findIndex(exp => exp.company === company);

            if (existingIndex !== -1) {
               
                return prev.map((exp, index) =>{
                    if(index===existingIndex){
                        return {...exp,details:[...exp.details,detail]}
                    }
                    else{
                        return exp;
                    }
                });
            } else {
                
                return [...prev, { company, details: [detail] }];
            }
        });
    };
    modalEvent.on("addExperience",addExperienceData)
    return ()=>{
        
        modalEvent.off("addExperience",addExperienceData) 
    }
},[])
useEffect(()=>{
    const addIntroData = (e) => {
        setIntro(e);   
    };
    modalEvent.on("addIntro",addIntroData)
    return ()=>{
        
        modalEvent.off("addIntro",addIntroData);    
    }
},[])
useEffect(() => {

        const addSkillData = (e) => {
            setSkillData(e);
        }
        const addAboutData=(e)=>{
            setAboutData(e);
        }
        modalEvent.on("addSkillData", addSkillData)
        modalEvent.on("addAboutData", addAboutData)
        return () => {
            modalEvent.off("addSkillData", addSkillData)
            modalEvent.off("addAboutData", addAboutData)
        }
    }, [])

    return(
            <>
            <main>
                <Intro handleProfile={activeProfile} profilePhoto={profilePhoto} data={intro}/>
                {active && <ProfileSetup quit={closeProfile}/>}
                <About data={aboutData}/>
                <Activity/>
                <Education data={education}/>
                <Skill data={skillData}/>
                
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