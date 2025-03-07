// import AboutContent from "../../elements/AboutContent/AboutContent"
// import Header from "../../elements/Header/Header"
import "./About.css"
export default function About(){
    return(
        <>
            <div id="about">
                <div id="aboutHeading" className="sectionHeader">
                    <h2>About</h2>
                    <span className="material-icons edit" id="aboutBtn">edit</span>
                </div>
                
                <p id="aboutText">
                        As a fourth year computer Science engineering student with competencies in data structures and algorithms, competitive programming,DBMS along with proficiency in C++ and web development, I am keen to apply my skills and knowledge to real world challenges
                </p>
                <div id="aboutSkills">
                    <div id="aboutSkillsHeader">
                        <div id="aboutSkillsHeaderLeft">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path fill="#00000099" d="M168.5 72L256 165l87.5-93-175 0zM383.9 99.1L311.5 176l129 0L383.9 99.1zm50 124.9L256 224 78.1 224 256 420.3 433.9 224zM71.5 176l129 0L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"/></svg>
                            <h4>Top skills</h4>
                        </div>
                        <div id="aboutSkillsHeaderRight">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path fill="#00000099" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div id="topSkillsContainer">
                        <div className="topSkill">C++ • </div>
                        <div className="topSkill">Sql • </div>
                        <div className="topSkill">Js  </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}


{/* <Header heading={"About"} symbol1={"add"} symbol2={edit} name={about} handleClick={} handleEdit={}/>
<AboutContent */}