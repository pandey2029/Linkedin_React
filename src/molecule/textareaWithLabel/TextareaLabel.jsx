/* eslint-disable react/prop-types */

import Label from "../../atoms/label/";
import Textarea from "../../atoms/textArea";

export default function TextareaLabel({field,eventHandler={},data,style={},attributes={}}){
    return(
        <>
            <Label id={field.id||""} style={style} label={field.label||""}>
                <Textarea attributes={attributes} eventHandler={eventHandler} data={data[field.id]||""}/>
            </Label>
        </>
    )
}