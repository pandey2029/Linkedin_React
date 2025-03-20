/* eslint-disable react/prop-types */
import Icon from "../../../atoms/icons/Icon"
export default function SkillDiv({skill,handleClick1,handleClick2}){
    return(
        <div className="skill">
        
            <Icon id="delete" icon="close" handleClick={handleClick1}/>
            {skill}
            <Icon id="move" icon="menu" handleClick={handleClick2}/>
        </div>
    )
}