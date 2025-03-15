/* eslint-disable react/prop-types */
const buttonTypes={
    primary:"primaryButton",
    secondary:"secondaryButton",
    tertiary:"tertiaryButton",
    activity:"activityButton"
}

export default function Button({type,children,handleClick=()=>{}}){
    type=buttonTypes[type] ? buttonTypes[type]:"default"
    return(
        <>
        <button className={type} onClick={handleClick}>
            {children}
        </button>
        </>
    )
}