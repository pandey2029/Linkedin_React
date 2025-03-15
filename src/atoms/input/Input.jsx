/* eslint-disable react/prop-types */
export default function Input({eventHandler={},attributes={},data,handleClick=()=>{}}){
    return(
        <input  {...eventHandler} {...attributes} value={data} onClick={handleClick}/>
    )
}