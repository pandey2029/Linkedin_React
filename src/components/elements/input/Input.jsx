/* eslint-disable react/prop-types */
export default function Input({eventHandler={},attributes={},data}){
    return(
        <input  {...eventHandler} {...attributes} value={data}/>
    )
}