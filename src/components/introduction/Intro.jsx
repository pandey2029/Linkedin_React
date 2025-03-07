/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
let introData = JSON.parse(localStorage.getItem("introData")) || {};

import "./Intro.css"
import profilePhoto from "../images/profilephoto.jpeg"
import backgroundImage from "../images/backgroundimg.jpg"
export default function Intro({handleProfile}){
    return(
        <>
            <div id="introduction">
                <img id="backgroundImg" src={backgroundImage}/>
                <img id="profileImg" src={profilePhoto}/>
                <div id="editIntroContainer"><span id="editIntroBtn" className="material-icons">edit</span></div>
            <div id="intro">
                <div id="introLeft">
                    <div id="name">
                        
                    </div>
                    <div id="headline">
                        
                    </div>
                    <div id="locationContact">
                        <div id="location">
                        
                        </div>
                        <div id="contact">
                            Contact Info
                        </div>
                    </div>
                    <div id="connections">
                        500+ connections
                    </div>
                </div>
                <div id="introRight">
                    <div className="experience">
                        <img className="experienceImg" id="experienceCompanyImg" src=""/>
                        <div className="experienceName" id="experienceCompanyName"></div>
                    </div>
                    <div className="experience">
                        <img className="experienceImg" id="experienceSchoolImg" src=""/>
                        <div className="experienceName" id="experienceSchoolName"></div>
                    </div>
                </div>
            </div>
                <div id="aboutButtons">
                    <button id="openTo">Open to</button>
                    <button id="addProfile" onClick={handleProfile}>Add Profile Section</button>
                    
                    <button id="enhance">Enhance Profile</button>
                    <button id="resources">Resources</button>
                   
                </div>
                <div id="addModal"></div>
            </div>

        </>
    )
}