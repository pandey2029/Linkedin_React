/* eslint-disable react/prop-types */

import Label from "../label/Label";
import Textarea from "../textArea/TextArea";

export default function TextareaLabel({field,eventHandler={},data,style={},attributes={}}){
    return(
        <>
            <Label id={field.id||""} style={style} label={field.label||""}>
                <Textarea attributes={attributes} eventHandler={eventHandler} data={data ? data[field.id]:""}/>
            </Label>
        </>
    )
}