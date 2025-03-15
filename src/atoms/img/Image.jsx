/* eslint-disable react/prop-types */
export default function Image({className,id,src}){
    return (
        <img className={className ? className:undefined} id={id ? id:undefined} src={src}/>
    )
}
