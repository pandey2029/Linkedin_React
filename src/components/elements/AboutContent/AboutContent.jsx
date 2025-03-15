export default function AboutContent(aboutText,aboutSkills){
    return(
        <>
            
                
                
                <p id="aboutText">
                      {aboutText}
                </p>
                <div id="aboutSkills">
                    <div id="aboutSkillsHeader">
                        <div id="aboutSkillsHeaderLeft">
                            <i className="material-symbols-outlined">diamond</i>
                            <h4>Top skills</h4>
                        </div>
                        <div id="aboutSkillsHeaderRight">
                        <i className="material-icons-outlined">arrow_forward</i>
                        </div>
                    </div>
                    <div id="topSkillsContainer">
                        {aboutSkills.map((skill,index)=>(<div className="topSkill" key={index}>{`${skill} •`}</div>))}
                    </div>
                </div>
                
            
        </>
    )
}