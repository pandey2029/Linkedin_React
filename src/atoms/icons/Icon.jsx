/* eslint-disable react/prop-types */
export default function Icon({icon,id,handleClick=()=>{}}){
    return(
        <i className={`material-icons ${id ? id:""}`} onClick={handleClick}>{icon}</i>
    )
}
