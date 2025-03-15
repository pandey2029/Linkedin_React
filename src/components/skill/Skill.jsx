import "./Skill.css"
export default function Skill(){
    return(
        <>
            <div id="skills" style={{marginTop:"0", marginBottom:"0"}}>
                <div id="skillsHeader" className="sectionHeader">
                    <div id="skillsHeaderLeft" className="sectionHeaderLeft">
                        Skills 
                    </div>
                    <div id="skillsHeaderRight" className="sectionHeaderRight">
                        <i className="material-icons add" id="addSkillBtn">add</i>
                        <i className="material-icons option">edit</i>
                    </div>
                </div>
                <div id="skillContainer">
                    <div className="skill" style={{border:"0"}}>C++</div>
                    <div className="skill">SQL</div>
                </div>
                <div id="skillsFooter">
                    Show all skills
                    <i className="material-icons option">arrow_forward</i>
                </div>

            </div>
        </>
    )
}