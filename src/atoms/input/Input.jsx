/* eslint-disable react/prop-types */
export default function Input({eventHandler={},attributes={},data,handleClick=()=>{},id}){
    return(
        <input id={id} {...eventHandler} {...attributes} value={data} onClick={handleClick}/>
    )
}