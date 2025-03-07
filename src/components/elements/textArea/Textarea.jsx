/* eslint-disable react/prop-types */
export default function Textarea({eventHandler={},attributes={},data}){
    return(
        <textarea {...eventHandler} {...attributes} value={data}></textarea>
    )
}