export default function SkillContent({skills}){
    return(
        skills.map((skill,index)=>(<div className="skill" key={index}>{skill}</div>))
    )
} 