import Option from "./Option";

/* eslint-disable react/prop-types */
export default function Select({field,attributes,eventHandler,data}){
    return(
        <select {...attributes} {...eventHandler} value={data}>
            {field.options.map((option, index) => (
                <Option key={index} value={option}/>
             ))}
        </select>
    )
}