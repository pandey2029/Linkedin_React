/* eslint-disable react/prop-types */

import Label from "../../atoms/label/Label";
import Textarea from "../../atoms/textArea/Textarea";

export default function TextareaLabel({field,eventHandler={},data={},style={},attributes={}}){
    let value;
    if(typeof data==="string"){
        value=data;
    }
    else{
        value=data[field.id];
    }
    
    return(
        <>
            <Label id={field.id||""} style={style} label={field.label||""}>
                <Textarea attributes={attributes} eventHandler={eventHandler} data={value}/>
            </Label>
        </>
    )
}