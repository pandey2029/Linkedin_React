/* eslint-disable react/prop-types */
export default function Role({role,duration,location,skills}){
    return(
        
        <div className="experienceDetail">
            <div className="role">
                {role}
            </div>
            <div className="duration">
                {duration}
            </div>
            <div className="location">
                {location}
            </div>
            <div className="roleSkills">
                {skills}
            </div>
        </div>
        
    )
}