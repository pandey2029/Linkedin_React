/* eslint-disable react/prop-types */
export default function Button({type,text,eventHandler={}}){
    return(
        <>
        <button className={type} {...eventHandler}>
            {text}
        </button>
        </>
    )
}