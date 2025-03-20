/* eslint-disable react/prop-types */
export default function Image({className,id,src,handleClick=()=>{}}){
    return (
        <img className={className ? className:undefined} id={id ? id:undefined} src={src} onClick={handleClick}/>
    )
}
